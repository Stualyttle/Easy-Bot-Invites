import { Invite } from 'discord.js';
import { executor } from '../../utils';
import { updateInvitesCache } from '../../modules/invite/check-invite';

// The execute function
export async function onGuildInviteCreate(invite: Invite): Promise<void> {
  // All actions that should be executed
  const actions: Promise<() => void>[] = [
    executor(updateInvitesCache, invite.guild.id),
  ];

  // If no actions, return
  if (actions.length < 1) return;

  // Execute all actions
  await Promise.all(actions);
}
