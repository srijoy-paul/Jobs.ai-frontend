import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//     const [mounted, setMounted] = React.useState(false);

// //   necessary for server-side rendering
// //   because mode is undefined on the server
//     React.useEffect(() => {
//       setMounted(true);
//     }, []);
//     if (!mounted) {
//       return <Button variant="soft">Change mode</Button>;
//     }

//   return (
//     <Button
//       variant="soft"
//       onClick={() => {
//         setMode(mode === "light" ? "dark" : "light");
//       }}
//     >
//       {mode === "light" ? "Turn dark" : "Turn light"}
//     </Button>
//   );
// }
async function handleSubmit(e) {
  e.preventDefault();
  // console.log(e);
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  // const email = e.target[0].value;
  // const password = e.target[1].value;
  const credentials = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    crossDomain: true,
    body: JSON.stringify({
      username: credentials.email,
      password: credentials.password,
    }),
  };
  // console.log(
  //   JSON.stringify({
  //     username: credentials.email,
  //     password: credentials.password,
  //   })
  // );

  const response = await fetch(
    "http://localhost:3000/api/v1/auth/signin",
    options
  );
  const res = await response.json();
  console.error(res);
}

export default function Signin() {
  return (
    <main>
      {/* <ModeToggle /> */}
      <CssBaseline />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Sheet
          sx={{
            width: 300,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              id="username"
              name="username"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button sx={{ mt: 1 }} type="submit">
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </form>
    </main>
  );
}
