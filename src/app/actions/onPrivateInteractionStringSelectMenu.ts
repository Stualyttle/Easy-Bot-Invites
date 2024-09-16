import { actionPrefix } from './index';
import { StringSelectMenuInteraction } from 'discord.js';

// This file's prefix
const prefix: string = actionPrefix + 'onPrivateInteractionModalSubmit.';

// The execute function
export async function onPrivateInteractionStringSelectMenu(
  userId: string,
  interaction: StringSelectMenuInteraction,
): Promise<void> {
  // All actions that should be executed
  const actions: Promise<() => void>[] = [
    // executor(prefix + 'test', test, userId, interaction),
  ];

  // If no actions, return
  if (actions.length < 1) return;

  // Execute all actions
  await Promise.all(actions);
}
