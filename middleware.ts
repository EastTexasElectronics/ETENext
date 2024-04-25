import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Create matchers for user and organization dashboards
const isUserDashboard = createRouteMatcher('/user-dashboard');
const isOrganizationDashboard = createRouteMatcher('/organization-dashboard');

export default clerkMiddleware((auth, req) => {
  // Restrict user dashboard to signed-in users
  if (isUserDashboard(req)) {
    auth().protect(); // This ensures the user is signed in
  }

  // Restrict organization dashboard to users with specific roles
  if (isOrganizationDashboard(req)) {
    auth().protect((has) => {
      return has({ permission: 'org:member' }) || has({ permission: 'org:admin' });
    });
  }
});

// Configure the middleware to run on all routes that don't serve static files or API routes
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
