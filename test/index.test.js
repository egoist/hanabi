import hanabi from '../src'

test('main', () => {
  const out = hanabi(`co`)
  expect(out).toBe('<span style="color: #91C132">c</span><span style="color: #F19726">o</span>')
})
