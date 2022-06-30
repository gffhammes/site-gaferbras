import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakPoint = () => {
  const theme = useTheme();
  const smSize = useMediaQuery(theme.breakpoints.up('sm'));
  const mdSize = useMediaQuery(theme.breakpoints.up('md'));
  const lgSize = useMediaQuery(theme.breakpoints.up('lg'));
  const xlSize = useMediaQuery(theme.breakpoints.up('xl'));

  return ({
    smSize,
    mdSize,
    lgSize,
    xlSize,
  })
}