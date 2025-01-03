var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var demoEmail = "\n<p>K\u00EDnh g\u1EEDi [T\u00EAn nh\u00E0 tuy\u1EC3n d\u1EE5ng ho\u1EB7c B\u1ED9 ph\u1EADn tuy\u1EC3n d\u1EE5ng],</p>\n\n<p>T\u00F4i t\u00EAn l\u00E0 [T\u00EAn c\u1EE7a b\u1EA1n], hi\u1EC7n t\u1EA1i t\u00F4i \u0111ang t\u00ECm ki\u1EBFm c\u01A1 h\u1ED9i l\u00E0m vi\u1EC7c trong l\u0129nh v\u1EF1c [L\u0129nh v\u1EF1c/Ng\u00E0nh ngh\u1EC1 b\u1EA1n \u1EE9ng tuy\u1EC3n]. Sau khi t\u00ECm hi\u1EC3u th\u00F4ng tin t\u1EEB [Ngu\u1ED3n th\u00F4ng tin], t\u00F4i r\u1EA5t \u1EA5n t\u01B0\u1EE3ng v\u1EDBi nh\u1EEFng gi\u00E1 tr\u1ECB v\u00E0 t\u1EA7m nh\u00ECn c\u1EE7a c\u00F4ng ty [T\u00EAn c\u00F4ng ty], v\u00E0 t\u00F4i mong mu\u1ED1n \u0111\u01B0\u1EE3c tr\u1EDF th\u00E0nh m\u1ED9t ph\u1EA7n trong \u0111\u1ED9i ng\u0169 c\u1EE7a Qu\u00FD c\u00F4ng ty.</p>\n\n<p>T\u00F4i \u0111\u00E3 c\u00F3 [S\u1ED1 n\u0103m kinh nghi\u1EC7m ho\u1EB7c k\u1EF9 n\u0103ng n\u1ED5i b\u1EADt] trong l\u0129nh v\u1EF1c [L\u0129nh v\u1EF1c chuy\u00EAn m\u00F4n], v\u1EDBi c\u00E1c k\u1EF9 n\u0103ng ch\u00EDnh bao g\u1ED3m: [Li\u1EC7t k\u00EA c\u00E1c k\u1EF9 n\u0103ng n\u1ED5i b\u1EADt]. M\u1ED9t s\u1ED1 d\u1EF1 \u00E1n ti\u00EAu bi\u1EC3u t\u00F4i t\u1EEBng tham gia l\u00E0 [N\u00EAu v\u00ED d\u1EE5 d\u1EF1 \u00E1n/nghi\u1EC7p v\u1EE5 quan tr\u1ECDng]. Nh\u1EEFng kinh nghi\u1EC7m n\u00E0y gi\u00FAp t\u00F4i t\u1EF1 tin r\u1EB1ng m\u00ECnh c\u00F3 th\u1EC3 \u0111\u00F3ng g\u00F3p hi\u1EC7u qu\u1EA3 v\u00E0o s\u1EF1 ph\u00E1t tri\u1EC3n c\u1EE7a c\u00F4ng ty.</p>\n\n<p>T\u00F4i \u0111\u00EDnh k\u00E8m CV v\u00E0 c\u00E1c t\u00E0i li\u1EC7u li\u00EAn quan \u0111\u1EC3 Qu\u00FD c\u00F4ng ty c\u00F3 th\u1EC3 tham kh\u1EA3o th\u00EAm v\u1EC1 qu\u00E1 tr\u00ECnh h\u1ECDc t\u1EADp v\u00E0 l\u00E0m vi\u1EC7c c\u1EE7a t\u00F4i. T\u00F4i r\u1EA5t mong c\u00F3 c\u01A1 h\u1ED9i \u0111\u01B0\u1EE3c trao \u0111\u1ED5i tr\u1EF1c ti\u1EBFp \u0111\u1EC3 th\u1EA3o lu\u1EADn th\u00EAm v\u1EC1 c\u00E1ch t\u00F4i c\u00F3 th\u1EC3 \u0111\u00F3ng g\u00F3p v\u00E0o s\u1EF1 th\u00E0nh c\u00F4ng c\u1EE7a c\u00F4ng ty.</p>\n\n<p>Tr\u00E2n tr\u1ECDng c\u1EA3m \u01A1n Qu\u00FD c\u00F4ng ty \u0111\u00E3 d\u00E0nh th\u1EDDi gian \u0111\u1ECDc email n\u00E0y. R\u1EA5t mong nh\u1EADn \u0111\u01B0\u1EE3c ph\u1EA3n h\u1ED3i t\u1EEB Qu\u00FD c\u00F4ng ty.</p>\n\n<p>Tr\u00E2n tr\u1ECDng,</p>\n<p>[H\u1ECD v\u00E0 t\u00EAn]</p>\n";
// Tạo html từ section
function renderSectionLayout(layout, content) {
    var html = "";
    if (layout.before) {
        html += layout.before;
    }
    if (layout.children) {
        if (typeof layout.children === "string") {
            html += content[layout.children];
        }
        else if (Array.isArray(layout.children)) {
            html += layout.children.map(function (value) { return renderSectionLayout(value, content); }).join("");
        }
        else {
            html += renderSectionLayout(layout.children, content);
        }
    }
    if (layout.after) {
        html += layout.after;
    }
    return html;
}
function getSectionHtml(section) {
    var content = section.content, layout = section.layout;
    var sectionHtml = content.map(function (sectionItem) {
        var sectionItemHtml = renderSectionLayout(layout, sectionItem);
        return sectionItemHtml;
    }).join("");
    return sectionHtml;
}
;
// Tạo html từ section END
// Tạo html main từ layout
function renderMainLayout(layout, data) {
    var html = "";
    if (layout.before) {
        html += layout.before;
    }
    if (layout.children) {
        if (typeof layout.children === "string") {
            html += getSectionHtml(data[layout.children]);
        }
        else if (Array.isArray(layout.children)) {
            html += layout.children.map(function (value) { return renderMainLayout(value, data); }).join("");
        }
        else {
            html += renderMainLayout(layout.children, data);
        }
    }
    if (layout.after) {
        html += layout.after;
    }
    return html;
}
var dataDemo = {
    layout: {
        before: '<div class="main">',
        after: '</div>',
        children: [
            { children: 'personalInformation' },
            { children: 'receiverInformation' },
            { children: 'letterContent' },
        ]
    },
    personalInformation: {
        label: {
            children: "Personal Information"
        },
        content: [
            {
                id: 0,
                image: "https://smilemedia.vn/wp-content/uploads/2022/09/cach-chup-hinh-the-dep.jpeg",
                name: "Nguyễn Công Trứ",
                position: "PM",
                phoneNumber: "0123456789",
                email: "tru@gmail.com",
                address: "abc.street",
                birthDate: "20/10/2022",
                personalWebsite: "abc.com"
            }
        ],
        layout: {
            before: '<div class="personalInformation">',
            after: '</div>',
            children: [
                {
                    before: '<div class="block1">',
                    after: '</div>',
                    children: [
                        {
                            before: '<img class="avatar" src="',
                            after: '" alt="">',
                            children: 'image',
                        },
                        {
                            before: '<div class="block1_1">',
                            after: '</div>',
                            children: [
                                {
                                    before: '<p class="name">',
                                    after: '</p>',
                                    children: 'name'
                                },
                                {
                                    before: '<p class="position">',
                                    after: '</p>',
                                    children: 'position'
                                }
                            ]
                        }
                    ]
                },
                {
                    before: '<div class="block2">',
                    after: '</div>',
                    children: [
                        {
                            before: '<p class="block2_line">',
                            after: '</p>',
                            children: 'phoneNumber'
                        },
                        {
                            before: '<p class="block2_line">',
                            after: '</p>',
                            children: 'email'
                        },
                        {
                            before: '<p class="block2_line">',
                            after: '</p>',
                            children: 'address'
                        },
                        {
                            before: '<p class="block2_line">',
                            after: '</p>',
                            children: 'birthDate'
                        },
                        {
                            before: '<p class="block2_line">',
                            after: '</p>',
                            children: 'personalWebsite'
                        }
                    ]
                }
            ]
        },
        schema: {
            avatar: {
                label: "avatar",
            },
            name: {
                label: "Name",
            },
            position: {
                label: "Position",
            },
            phoneNumber: {
                label: "Phone number",
            },
            email: {
                label: "Email",
            },
            address: {
                label: "Address",
                multiline: true
            },
            birthDate: {
                label: "Birth date",
                type: 'date'
            },
            personalWebsite: {
                label: "Personal website",
            }
        }
    },
    receiverInformation: {
        label: {
            children: "Receiver Information"
        },
        content: [
            {
                id: 0,
                name: "Nguyễn Văn Ân",
                position: "Trưởng Phòng",
                companyName: "abc",
                address: "abc.abc"
            }
        ],
        layout: {
            before: '<div class="receiverInformation">',
            after: '</div>',
            children: [
                {
                    before: '<p class="receiverInformation_line">',
                    after: '</p>',
                    children: "name"
                },
                {
                    before: '<p class="receiverInformation_line">',
                    after: '</p>',
                    children: "position"
                },
                {
                    before: '<p class="receiverInformation_line">',
                    after: '</p>',
                    children: "companyName"
                },
                {
                    before: '<p class="receiverInformation_line">',
                    after: '</p>',
                    children: "address"
                }
            ]
        },
        schema: {
            name: {
                label: "Name",
            },
            position: {
                label: "Position",
            },
            companyName: {
                label: "Company Name",
            },
            address: {
                label: "Address",
                multiline: true
            }
        }
    },
    letterContent: {
        label: {
            children: "Letter content",
        },
        content: [
            {
                content: demoEmail
            }
        ],
        layout: {
            before: '<div class="coverLetterContent">',
            after: '</div>',
            children: "content"
        },
        schema: {
            content: {}
        }
    }
};
// Generate the HTML
var htmlBody = document.querySelector('body');
var layout = dataDemo.layout, dataValue = __rest(dataDemo, ["layout"]);
var htmlOutput = renderMainLayout(dataDemo.layout, dataValue);
if (htmlBody) {
    htmlBody.innerHTML = htmlOutput;
}
