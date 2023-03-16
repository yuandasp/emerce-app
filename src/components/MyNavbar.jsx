import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { logoutHandler } from "../redux/usersSlice";

function MyNavbar() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.form.username);
  const roleUser = useSelector((state) => state.user.form.role);

  return (
    <div>
      <Navbar
        color="light"
        light
        style={{ paddingRight: "72px", paddingLeft: "72px" }}
      >
        <NavbarBrand>Emmerce</NavbarBrand>
        <Nav>
          {username ? (
            <>
              <NavItem>
                <NavLink style={{ color: "gray" }}>Hello, {username}</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pages
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <Link to="/cart">Cart</Link>
                  </DropdownItem>
                  {roleUser === "Admin" ? (
                    <DropdownItem>
                      <Link to="/admin">Admin</Link>
                    </DropdownItem>
                  ) : null}
                  <DropdownItem>
                    <Link to="/history">History</Link>
                  </DropdownItem>
                  {/* <DropdownItem>
                    <Link to="/product-detail">Product Detail</Link>
                  </DropdownItem> */}
                  <DropdownItem divider />
                  <DropdownItem onClick={() => dispatch(logoutHandler)}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          ) : (
            <NavItem>
              <NavbarText>
                <Link to="/login" className="p-2">
                  Login
                </Link>
                {"|"}
                <Link to="/register" className="p-2">
                  Register
                </Link>
              </NavbarText>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
