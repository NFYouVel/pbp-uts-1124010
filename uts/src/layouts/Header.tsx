import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d69540" }}>
      
      <Toolbar>

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          UTS Pemrograman Berbasis Platform
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="body2">
          1124010 - Marvel Nathanael Lie
        </Typography>

      </Toolbar>

    </AppBar>
  );
}

export default Header;
