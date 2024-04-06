import { Divider, Heading, Text, MenuList, MenuItem, Menu } from "@chakra-ui/react";

export default function Page() {
    return (
        <div className=" px-10">
            <main className=" grid grid-cols-12 min-h-screen p-6">
                <Heading className="col-start-4 col-span-3" as="h3" size="lg">
                    Laylat Al Qudr
                </Heading>
                <Heading className="col-start-4 col-span-3  pb-5" as="h4" size="md">
                    1. Lorem Ipsum
                </Heading>
                <Text className="col-start-4 col-span-6" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo aliquet
                    diam, eget mattis erat. Cras condimentum justo quis velit ultrices venenatis sit
                    amet vel est. Aenean eu ullamcorper sem. Aenean vitae mattis elit. Pellentesque
                    auctor augue et viverra interdum. Quisque lobortis odio a leo interdum, nec
                    egestas lorem blandit. Donec vehicula gravida lacus. Cras laoreet lectus at quam
                    fermentum, sed volutpat nulla molestie. Suspendisse faucibus eleifend ex eu
                    condimentum. Aliquam efficitur sem ac condimentum rutrum. Nulla a eleifend mi,
                    eget hendrerit turpis. Integer commodo, orci nec suscipit tempor, dolor odio
                    pulvinar justo, eget suscipit diam magna eget libero. Duis scelerisque sit amet
                    lectus vitae elementum. Donec volutpat est a nulla dapibus, sit amet molestie
                    dui fringilla. Nunc eu orci id purus condimentum accumsan sed ut lacus.
                    Vestibulum tristique mauris id nisi lacinia suscipit. Phasellus iaculis, ante ac
                    consectetur aliquam, nisl leo pretium neque, bibendum convallis nibh mauris
                    pharetra metus. Sed nibh eros, posuere non elit quis, porttitor egestas tellus.
                    Cras ut vestibulum leo. In quis neque consectetur neque pretium tempor eu eu
                    elit. Sed consequat, ipsum interdum dapibus consequat, urna sapien fringilla
                    ligula, et tincidunt lorem diam ut lorem. Quisque eget arcu eros. Aliquam quis
                    laoreet neque. Proin nibh dui, luctus non imperdiet ut, auctor at est.
                </Text>
                <Divider className="col-start-4 col-span-6 mb-5 mt-5" />
                <Heading className="col-start-4 col-span-3 pb-5" as="h4" size="md">
                    2. Lorem Ipsum
                </Heading>
                <Text className="col-start-4 col-span-6" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo aliquet
                    diam, eget mattis erat. Cras condimentum justo quis velit ultrices venenatis sit
                    amet vel est. Aenean eu ullamcorper sem. Aenean vitae mattis elit. Pellentesque
                    auctor augue et viverra interdum. Quisque lobortis odio a leo interdum, nec
                    egestas lorem blandit. Donec vehicula gravida lacus. Cras laoreet lectus at quam
                    fermentum, sed volutpat nulla molestie. Suspendisse faucibus eleifend ex eu
                    condimentum. Aliquam efficitur sem ac condimentum rutrum. Nulla a eleifend mi,
                    eget hendrerit turpis. Integer commodo, orci nec suscipit tempor, dolor odio
                    pulvinar justo, eget suscipit diam magna eget libero. Duis scelerisque sit amet
                    lectus vitae elementum. Donec volutpat est a nulla dapibus, sit amet molestie
                    dui fringilla. Nunc eu orci id purus condimentum accumsan sed ut lacus.
                    Vestibulum tristique mauris id nisi lacinia suscipit. Phasellus iaculis, ante ac
                    consectetur aliquam, nisl leo pretium neque, bibendum convallis nibh mauris
                    pharetra metus. Sed nibh eros, posuere non elit quis, porttitor egestas tellus.
                    Cras ut vestibulum leo. In quis neque consectetur neque pretium tempor eu eu
                    elit. Sed consequat, ipsum interdum dapibus consequat, urna sapien fringilla
                    ligula, et tincidunt lorem diam ut lorem. Quisque eget arcu eros. Aliquam quis
                    laoreet neque. Proin nibh dui, luctus non imperdiet ut, auctor at est.
                </Text>
            </main>
        </div>
    );
}
