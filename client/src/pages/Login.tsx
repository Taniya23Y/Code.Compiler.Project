import "./pageStyle/grid.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/slices/api";
import { handleError } from "@/utils/handleError";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";

const formSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  async function handleLogin(values: z.infer<typeof formSchema>) {
    // console.log(values);
    try {
      const response = await login(values).unwrap();
      dispatch(updateCurrentUser(response));
      dispatch(updateIsLoggedIn(true));
      navigate("/");
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <div className="__login grid-bg w-full h-[calc(100dvh-60px)] flex flex-col justify-center items-center gap-3">
      <div className="__form_container bg-black border-[1px] py-8 px-4 flex flex-col gap-5 w-[300px]">
        <div className="">
          <h1 className="font-mono text-4xl font-bold text-left">Login</h1>
          <p className="font-mono text-xs">Welcome back fellow coder 😁</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className="text-white">
                    <Input
                      required
                      disabled={isLoading}
                      placeholder="username or Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Input
                    required
                      disabled={isLoading}
                      type="password"
                      placeholder="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button loading={isLoading} className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <small className="text-xs font-mono">
          Don't have an account?{" "}
          <Link className="text-blue-500" to="/signup">
            Signup.
          </Link>
        </small>
      </div>
    </div>
  );
}
