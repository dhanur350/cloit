import React from "react"

export const useClientSideRender = () => {
  const [isClientSide, setIsClientSide] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClientSide(true);
  },[])

  return {
    isClientSide
  }
}