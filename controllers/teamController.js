import Team from "../models/Team.js";
import User from "../models/User.js";

async function generateUniqueTeamCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code;
  let exists = true;

  while (exists) {
    code = Array.from({ length: 5 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    exists = await Team.findOne({ teamCode: code });
  }

  return code;
}

export const createTeam = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role === "admin")
      return res.status(403).json({ message: "Admins can't create teams" });
    if (user.team)
      return res.status(400).json({ message: "User already in a team" });

    const { teamName } = req.body;
    const existing = await Team.findOne({ teamName });
    if (existing) return res.status(400).json({ message: "Team name taken" });

    const teamCode = await generateUniqueTeamCode();
    const team = await Team.create({
      teamName,
      teamCode,
      leader: user._id,
      members: [user._id],
      score: 0
    });

    user.role = "leader";
    user.team = team._id;
    await user.save();

    res.status(201).json({ success: true, teamCode });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const joinTeam = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role === "admin")
      return res.status(403).json({ message: "Admins can't join teams" });
    if (user.team)
      return res.status(400).json({ message: "User already in a team" });

    const { teamCode } = req.body;
    const team = await Team.findOne({ teamCode });
    if (!team) return res.status(404).json({ message: "Invalid team code" });

    team.members.push(user._id);
    await team.save();

    user.team = team._id;
    user.role = "member";
    await user.save();

    res.json({ success: true, message: "Joined team successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("team");
    if (!user.team)
      return res.status(404).json({ message: "User not part of any team" });

    const team = await Team.findById(user.team)
      .populate("leader", "username email")
      .populate("members", "username email role");

    res.json({
      teamName: team.teamName,
      teamCode: team.teamCode,
      leader: team.leader,
      members: team.members,
      score: team.score
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find()
      .populate("leader", "username email")
      .populate("members", "username email role");

    const teamList = teams.map(team => ({
      teamName: team.teamName,
      teamCode: team.teamCode,
      leader: team.leader,
      members: team.members,
      score: team.score
    }));

    res.json(teamList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};