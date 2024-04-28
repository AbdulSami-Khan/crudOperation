import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const FormWrapper = ({
  children,
  description,
  title,
}: FormWrapperProps) => {
  return (
    <Card className="w-1/2 text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
