import { ButtonInteraction } from 'discord.js';
import { GuildMember } from '../../types';
import { executor } from '../../utils';
import { routeButtonPress } from '../../modules/interactions/button';

// The execute function
export async function onGuildInteractionButton(
  guildMember: GuildMember,
  interaction: ButtonInteraction,
): Promise<void> {
  // All actions that should be executed
  const actions: Promise<() => void>[] = [
    executor(routeButtonPress, guildMember, interaction),
  ];

  // If no actions, return
  if (actions.length < 1) return;

  // Execute all actions
  await Promise.all(actions);
}
