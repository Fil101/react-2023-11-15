import { createRoot } from "react-dom/client";
import React from "react";
import {restaurants} from "../Materials/mock.js";

const root = createRoot(document.getElementById("root"));


root.render(
    <ul>
        <li>
            <h2>Название ресторана - {restaurants[0].name}</h2>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[0].menu[0].name}</li>
                <li>{restaurants[0].menu[1].name}</li>
                <li>{restaurants[0].menu[2].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[0].reviews[0].text}</li>
                <li>{restaurants[0].reviews[1].text}</li>
            </ul>
        </li>
        <li>
            <h2>Название ресторана - {restaurants[1].name}</h2>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[1].menu[0].name}</li>
                <li>{restaurants[1].menu[1].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[1].reviews[0].text}</li>
                <li>{restaurants[1].reviews[1].text}</li>
                <li>{restaurants[1].reviews[2].text}</li>
            </ul>
        </li>
        <li>
            <h2>Название ресторана - {restaurants[2].name}</h2>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[2].menu[0].name}</li>
                <li>{restaurants[2].menu[1].name}</li>
                <li>{restaurants[2].menu[2].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[2].reviews[0].text}</li>
            </ul>
        </li>
        <li>
            <h2>Название ресторана - {restaurants[3].name}</h2>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[3].menu[0].name}</li>
                <li>{restaurants[3].menu[1].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[3].reviews[0].text}</li>
                <li>{restaurants[3].reviews[1].text}</li>
            </ul>
        </li>
    </ul>
);

// Task ********************************

root.render(
    React.createElement("ul", {
        children: [
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Название ресторана - ${restaurants[0].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[0].menu[0].name}),
                            React.createElement("li", {children: restaurants[0].menu[1].name}),
                            React.createElement("li", {children: restaurants[0].menu[2].name}),
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[0].reviews[0].text}),
                            React.createElement("li", {children: restaurants[0].reviews[1].text}),
                        ]
                    }),
                ]
            }),
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Название ресторана - ${restaurants[1].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[1].menu[0].name}),
                            React.createElement("li", {children: restaurants[1].menu[1].name}),
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[1].reviews[0].text}),
                            React.createElement("li", {children: restaurants[1].reviews[1].text}),
                            React.createElement("li", {children: restaurants[1].reviews[2].text}),
                        ]
                    }),
                ]
            }),
            React.createElement("li", {
                children: [
                    // eslint-disable-next-line react/no-children-prop
                    React.createElement("h2", {children: `Название ресторана - ${restaurants[2].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[2].menu[0].name}),
                            React.createElement("li", {children: restaurants[2].menu[1].name}),
                            React.createElement("li", {children: restaurants[2].menu[2].name}),
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[2].reviews[0].text}),
                        ]
                    }),

                ]
            }),
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Название ресторана - ${restaurants[3].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[3].menu[0].name}),
                            React.createElement("li", {children: restaurants[3].menu[1].name}),
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[3].reviews[0].text}),
                            React.createElement("li", {children: restaurants[3].reviews[1].text}),
                        ]
                    }),
                ]
            }),
        ]
    })
)



