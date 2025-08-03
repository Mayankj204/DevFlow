
const getWorkspaceDetails = async (req, res) => {
    try {
        // req.user is attached by the protect middleware
        const workspace = await Workspace.findById(req.user.workspace);
        if (!workspace) {
            return res.status(404).json({ message: "Workspace not found" });
        }
        res.status(200).json(workspace);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { getWorkspaceDetails };
