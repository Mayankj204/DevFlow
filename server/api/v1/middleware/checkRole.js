/**
 * ==============================================================================
 * FILE: /server/api/v1/middleware/checkRole.js
 * PURPOSE: Middleware to authorize users based on their roles.
 * ==============================================================================
 */

/**
 * Higher-order function to create a role-checking middleware.
 * This allows us to create specific middleware for different roles easily.
 * e.g., authorize('Admin', 'Owner')
 *
 * @param {...string} roles - A list of roles that are allowed to access the route.
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    // req.user is attached by the 'protect' middleware which should run before this.
    if (!req.user || !req.user.workspaceRole) {
      return res.status(403).json({ message: 'Forbidden: No user role found' });
    }

    // Check if the user's role is included in the list of allowed roles
    if (!roles.includes(req.user.workspaceRole)) {
      return res.status(403).json({
        message: `Forbidden: Role '${req.user.workspaceRole}' is not authorized to access this route`,
      });
    }

    // If the user's role is authorized, proceed to the controller
    next();
  };
};


module.exports = { authorize };
