interface HtmlLayoutBase {
    before?: string;
    after?: string;
    children: string | HtmlLayoutBase | HtmlLayoutBase[];
};

const layout1: HtmlLayoutBase = {
    before: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html {
            font-size: 1px;
        }

        body {
            background-color: rgb(58, 58, 58);
            margin-top: 20rem;
        }

        h1 {
            font-size: 32rem;
        }

        h2 {
            font-size: 24rem;
        }

        h3 {
            font-size: 18.72rem;
        }

        h4 {
            font-size: 16rem;
        }

        p,
        div {
            font-size: 14rem;
        }

        span {
            font-size: inherit;
        }

        p,
        span,
        h1,
        h2,
        h3,
        h4 {
            color: #303030;
        }

        .main {
            margin: auto;
            max-width: 796rem;
            background-color: white;
            padding: 36rem;
        }

        .sectionItem {
            margin-top: 8rem;
        }

        .sectionHeading {
            margin-top: 20rem;
            padding-bottom: 8rem;
            border-bottom: 2rem solid #786A51;
            color: #786A51;
        }

        .sectionBody {
            margin-left: 20rem;
            padding-top: 8rem;
        }

        /* personal infomation */

        .personalInformation {
            display: flex;
            justify-content: space-between;
        }

        .avatar {
            object-fit: cover;
            object-position: 50%;
            height: 128rem;
            width: 128rem;
        }

        .personalContent {
            flex: 2;
        }

        .name {
            color: #786A51;
            font-weight: bold;
        }

        .personalOtherItemContainer {
            display: flex;
            align-items: center;
            margin-left: 12rem;
        }

        .personalOtherItem {
            margin-left: 12rem;
            margin-top: 2rem;
            color: #303030;
        }

        .personalPosition {
            padding-left: 20rem;
            padding-right: 20rem;
            border-left: 2rem solid #786A51;
        }

        .position {
            text-align: center;
            color: #786A51;
        }

        .icon-app {
            color: #303030;
            font-size: 14rem;
        }

        /* personal infomation End */

        /* careerObjective */

        /* education */
        .timeRangeContainer {
            display: flex;
            align-items: center;
        }

        .timeRangeContainer span {
            margin-right: 8rem;
            font-size: 20rem;
            font-weight: bold;
        }

        .timeRangeIcon {
            color: #786A51;
        }

        /* education End*/

        /* workExperience */

        /* skills */
        .skillContainer {
            display: flex;
            flex-wrap: wrap;
        }

        .skillItemContainer {
            width: 50%;
            display: flex;
            align-items: center;
            margin: 4rem 0;
        }

        .levelDecor {
            display: flex;
            height: 32rem;
            width: 32rem;
            border: 2rem solid #786A51;
            border-radius: 50%;
        }

        .skillName {
            margin-left: 8rem;
        }

        /* skills End*/

        /* project */

        /* activities */

        /* certifications */

        /* languages */

        /* references */
        .referencesContainer {
            display: flex;
            flex-wrap: wrap;
        }

        .referenceItem {
            margin-top: 10rem;
            width: 33.33%;
        }

        /* references End */

        /* award */
    </style>
</head>

<body>
    <div class="main">`,
    after: `</div></body></html>`,
    children: {
        children: [
            { children: 'personalInformation' },
            { children: 'careerObjective' },
            { children: 'education' },
            { children: 'workExperience' },
            { children: 'skills' },
            { children: 'project' },
            { children: 'activities' },
            { children: 'certifications' },
            { children: 'languages' },
            { children: 'references' },
            { children: 'award' },
        ]
    }
}

const personalInformationLayout: HtmlLayoutBase = {
    children: {
        before: `<div class="personalInformation">`,
        after: '</div>',
        children: [
            {
                before: '<img class="avatar" src="',
                after: '" alt="avatar">',
                children: 'image'
            },
            {
                before: '<div class="sectionBody personalContent">',
                after: '</div>',
                children: [
                    {
                        before: `<h1 class="name">`,
                        after: `</h1>`,
                        children: 'name'
                    },
                    {
                        before: `<div class="personalOtherItemContainer">
                <span class="material-symbols-outlined icon-app">call</span>
                <p class="personalOtherItem">`,
                        after: `</p></div>`,
                        children: 'phoneNumber'
                    },
                    {
                        before: `<div class="personalOtherItemContainer">
                <span class="material-symbols-outlined icon-app">mail</span>
                <p class="personalOtherItem">`,
                        after: `</p></div>`,
                        children: 'email'
                    },
                    {
                        before: `<div class="personalOtherItemContainer">
                <span class="material-symbols-outlined icon-app">location_on</span>
                <p class="personalOtherItem">`,
                        after: `</p></div>`,
                        children: 'address'
                    },
                    {
                        before: `<div class="personalOtherItemContainer">
                <span class="material-symbols-outlined icon-app">calendar_month</span>
                <p class="personalOtherItem">`,
                        after: `</p></div>`,
                        children: 'birthDate'
                    },
                    {
                        before: `<div class="personalOtherItemContainer">
                <span class="material-symbols-outlined icon-app">share</span>
                <p class="personalOtherItem">`,
                        after: `</p></div>`,
                        children: 'personalWebsite'
                    }
                ]
            },
            {
                before: `<div class="personalPosition"><h2 class="position">`,
                after: `</h2></div>`,
                children: 'position'
            }
        ]
    }
}

/*
{
    before: ``,
    after: ``,
    children: 
}
*/

const careerObjectiveLayout: HtmlLayoutBase = {
    before: `<div class="careerObjective">
            <h1 class="sectionHeading">Mục tiêu nghề nghiệp</h1>
            <div class="sectionBody">`,
    after: `</div></div>`,
    children: {
        before: '<div>',
        after: '</div>',
        children: [
            {
                before: '<h2>',
                after: '</h2>',
                children: 'target'
            },
            {
                before: '<p>',
                after: '</p>',
                children: 'description'
            }
        ]
    }
}

const educationLayout: HtmlLayoutBase = {
    children: ''
}

const workExperienceLayout: HtmlLayoutBase = {
    children: ''
}

const skillsLayout: HtmlLayoutBase = {
    children: ''
}

const projectLayout: HtmlLayoutBase = {
    children: ''
}

const activitiesLayout: HtmlLayoutBase = {
    children: ''
}

const certificationsLayout: HtmlLayoutBase = {
    children: ''
}

const languagesLayout: HtmlLayoutBase = {
    children: ''
}

const referencesLayout: HtmlLayoutBase = {
    children: ''
}

const awardLayout: HtmlLayoutBase = {
    children: ''
}