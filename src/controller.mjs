export const piController = ({ pi }) => (_, res) => res.send(`PI=${pi}\n`)

export const eController = ({ e }) => (_, res) => res.send(`E=${e}\n`)
