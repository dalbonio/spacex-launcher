import React from "react";
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Nav = ({active}) => {

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color={active === "ultimo" ? "text.primary" : "inherit"} href="/ultimo">
                Ultimo Lançamento
            </Link>
            <Link
            underline="hover"
            color={active === "proximo" ? "text.primary" : "inherit"}
            href="/proximo"
            >
                Próximo Lançamento
            </Link>
            <Link
            underline="hover"
            href="/ultimos"
            aria-current="page"
            color={active === "ultimos" ? "text.primary" : "inherit"}
            >
                Lançamentos Passados
            </Link>
            <Link
            underline="hover"
            color={active === "proximos" ? "text.primary" : "inherit"}
            href="/proximos"
            aria-current="page"
            >
                Lançamentos Futuros
            </Link>
        </Breadcrumbs>
    )
}

export default Nav