import hanabi from '../src'

test('main', () => {
  const out = hanabi(`co`)
  expect(out).toBe('<span style=\"color: #23AC69\">co</span>')
})
