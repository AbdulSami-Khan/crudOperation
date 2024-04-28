"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmployeeSchema } from "../schemas";
import { createEmployee } from "@/actions/createEmployee";


export const EmployeeForm = () => {
  const form = useForm<z.infer<typeof EmployeeSchema>>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: {
      firstname: "",
      lastname : "",
      phoneNumber:"",
      email:""
    },
  });

  function onSubmit(values: z.infer<typeof EmployeeSchema>) {
    createEmployee(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]">First Name</FormLabel>
              <FormControl>
                <Input placeholder="Please Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]">Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Please Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]">Email</FormLabel>
              <FormControl>
                <Input placeholder="Please Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]">Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Please Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
