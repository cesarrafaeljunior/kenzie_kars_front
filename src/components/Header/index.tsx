import {
  Box,
  Center,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { destroyCookie } from "nookies";
import { useUserContext } from "@/contexts/user.context";
import { Link } from "../Link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const { user } = useUserContext();

  const logout = () => {
    destroyCookie(null, "ms.token");
    router.push("/login");
  };

  return (
    <header>
      <Center
        as={"nav"}
        h={"80px"}
        px={{ base: "16px", md: "32px", lg: "60px" }}
        borderBottom={"2px solid"}
        borderColor={"grey.6"}
        bgColor={"grey.10"}
      >
        <Box flex={"1 1 auto"}>
          <Img src={"/imgs/motors_shop_colored.png"} alt="Logo" />
        </Box>
        <Flex
          pl={{ base: "14px", md: "28px", lg: "44px" }}
          gap={{ base: "14px", md: "26px", lg: "40px" }}
          h={"100%"}
          alignItems={"center"}
          borderLeft={"2px solid"}
          borderColor={"grey.6"}
          display={{ base: "none", md: "flex" }}
        >
          {!user ? (
            <>
              <Link href={"/"}>Fazer Login</Link>
              <Link href={"/register"} variant={"outline2"}>
                Cadastrar
              </Link>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Flex gap={"8px"} alignItems={"center"}>
                  <Center
                    as={"p"}
                    bg={"brand.2"}
                    minW={"32px"}
                    boxSize={"32px"}
                    borderRadius={"50%"}
                    fontWeight={"bold"}
                    fontSize={"14px"}
                    color={"white"}
                  >
                    {`${user.name[0]}${
                      user.name.split(" ").length > 1
                        ? user.name.split(" ", 2)[1][0]
                        : ""
                    }`}
                  </Center>
                  <Text color={"grey.2"}>{user.name}</Text>
                </Flex>
              </MenuButton>
              <MenuList
                fontSize={"14px"}
                boxShadow={"0px 4px 40px -10px rgba(0, 0, 0, 0.25)"}
                borderRadius={"4px"}
              >
                <MenuItem>Editar Perfil</MenuItem>
                <MenuItem>Editar Endereço</MenuItem>
                {user.is_seller && <MenuItem>Meus Anúncios</MenuItem>}
                <MenuItem onClick={() => logout()}>Sair</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton display={{ base: "inline-flex", md: "none" }}>
                {isOpen ? (
                  <CloseIcon boxSize={"14px"} />
                ) : (
                  <HamburgerIcon boxSize={"20px"} />
                )}
              </MenuButton>
              <MenuList
                fontSize={"14px"}
                bgColor={"white"}
                borderRadius={"0"}
                border={"none"}
                w={"100vw"}
                transform={"translate3d(60px, 1px, 0)"}
              >
                {!user ? (
                  <>
                    <MenuItem>
                      <Link
                        href={"/"}
                        bgColor={"transparent"}
                        border={"none"}
                        justifyContent={"flex-start"}
                      >
                        Fazer Login
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href={"/register"}
                        variant="outline2"
                        bg={"transparent"}
                      >
                        Cadastrar
                      </Link>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>Editar Perfil</MenuItem>
                    <MenuItem>Editar Endereço</MenuItem>
                    {user.is_seller && <MenuItem>Meus Anúncios</MenuItem>}
                    <MenuItem onClick={() => logout()}>Sair</MenuItem>
                  </>
                )}
              </MenuList>
            </>
          )}
        </Menu>
      </Center>
    </header>
  );
};
