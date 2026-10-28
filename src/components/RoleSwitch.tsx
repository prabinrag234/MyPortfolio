import { motion } from 'framer-motion';
import { Code2, Stethoscope } from 'lucide-react';
import { useRole } from '../context/RoleContext';
import { profiles, roleOrder } from '../data/profiles';

const icons = {
  engineer: Code2,
  support: Stethoscope,
};

interface RoleSwitchProps {
  // Each switch needs its own layoutId so two instances don't animate into each other.
  id: string;
  className?: string;
}

export function RoleSwitch({ id, className = '' }: RoleSwitchProps) {
  const { role, setRole } = useRole();

  return (
    <div
      role="tablist"
      aria-label="Choose a professional profile"
      className={`inline-flex p-1 rounded-full border border-border bg-background/60 backdrop-blur-md shadow-sm ${className}`}
    >
      {roleOrder.map((r) => {
        const Icon = icons[r];
        const isActive = role === r;
        return (
          <button
            key={r}
            role="tab"
            aria-selected={isActive}
            onClick={() => setRole(r)}
            className={`relative flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
              isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`role-pill-${id}`}
                className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/30"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <Icon className="relative hidden sm:block w-4 h-4" />
            <span className="relative whitespace-nowrap">{profiles[r].label}</span>
          </button>
        );
      })}
    </div>
  );
}
