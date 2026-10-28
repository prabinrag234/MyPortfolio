import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { profiles, type Profile, type RoleId } from '../data/profiles';

interface RoleContextValue {
  role: RoleId;
  profile: Profile;
  setRole: (role: RoleId) => void;
}

const RoleContext = createContext<RoleContextValue | null>(null);

// The active profile lives in the URL (?role=support) so a role-specific link
// can be shared directly with a recruiter.
function readRoleFromUrl(): RoleId {
  const param = new URLSearchParams(window.location.search).get('role');
  return param === 'support' ? 'support' : 'engineer';
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<RoleId>(readRoleFromUrl);

  const setRole = useCallback((next: RoleId) => {
    setRoleState(next);
    const url = new URL(window.location.href);
    if (next === 'engineer') url.searchParams.delete('role');
    else url.searchParams.set('role', next);
    window.history.replaceState(null, '', url);
  }, []);

  return (
    <RoleContext.Provider value={{ role, profile: profiles[role], setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used inside RoleProvider');
  return ctx;
}
