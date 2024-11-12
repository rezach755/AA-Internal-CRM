import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

const additionalProps = {
  placeholder: "",
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <Card
      {...additionalProps}
      color="transparent"
      shadow={false}
      className="items-center"
    >
      <Icon className="h-7 w-7 text-[#062650]" />
      <Typography
        {...additionalProps}
        variant="h1"
        className="mb-2 mt-4 text-5xl text-[#062650]"
      >
        {count}
      </Typography>
      <Typography
        {...additionalProps}
        variant="h6"
        className="mb-2 font-normal text-[#062650]"
      >
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
