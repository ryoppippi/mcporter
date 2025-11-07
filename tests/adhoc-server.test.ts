import { describe, expect, it } from 'vitest';
import { resolveEphemeralServer } from '../src/cli/adhoc-server.js';

describe('resolveEphemeralServer', () => {
  it('injects Accept header for HTTP definitions', () => {
    const { definition } = resolveEphemeralServer({ httpUrl: 'https://example.com/mcp' });
    expect(definition.command.kind).toBe('http');
    const headers = definition.command.kind === 'http' ? definition.command.headers : undefined;
    expect(headers?.accept?.toLowerCase()).toContain('application/json');
    expect(headers?.accept?.toLowerCase()).toContain('text/event-stream');
  });
});
