export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { email, password } = req.body;
  const users = [
    {
      id: 1,
      email: "juanperez@example.com",
      password: "123456",
      accounts: [1],
    },
    {
      id: 2,
      email: "mariagomez@example.com",
      password: "password",
      accounts: [2],
    },
    {
      id: 3,
      email: "carloslopez@example.com",
      password: "qwerty",
      accounts: [3],
    },
  ];
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
  const token = `mock-token-${user.id}`;

  setTimeout(() => {
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        accounts: user.accounts,
      },
    });
  }, 1000);
}
