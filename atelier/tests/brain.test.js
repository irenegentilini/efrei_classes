import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

test('une chaîne vide est refusée', () => {
    assert.equal(validateMessage("").ok, false)
});

test('salut est lu correctement', () => {
    assert.equal(validateMessage("salut").value, "salut")
});

test('une chaîne trop longue est refusée', () => {
    assert.equal(validateMessage('a'.repeat(281)).ok, false)
});

test('une chaîne trop longue est refusée', () => {
    assert.equal(validateMessage('a'.repeat(281)).ok, false)
});

