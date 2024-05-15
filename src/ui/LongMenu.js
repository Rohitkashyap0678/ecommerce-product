import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { options } from "./options";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;

export default function LongMenu({ data }) {
    console.log(data, "datatattta")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        className="!px-[2px] !py-[4px]"
        onClick={handleClick}
      >
        <MoreVertIcon className="!text-white !h-5 !bottom-[2px] !relative !w-6" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            minWidth: "20ch",
          },
        }}
      >
        {/* {options.map((option) => (
          <MenuItem key={option}  onClick={handleClose}>
            {option}
          </MenuItem>
        ))} */}
        <MenuItem className="itemList" onClick={handleClose}>
          <Link className="!font-semibold" to="/cart-details">
            Add to Cart
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="!font-semibold">Edit Product</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="!font-semibold">Delete Product</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
