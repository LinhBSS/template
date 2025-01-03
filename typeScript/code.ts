const demoEmail = `
<p>Kính gửi [Tên nhà tuyển dụng hoặc Bộ phận tuyển dụng],</p>

<p>Tôi tên là [Tên của bạn], hiện tại tôi đang tìm kiếm cơ hội làm việc trong lĩnh vực [Lĩnh vực/Ngành nghề bạn ứng tuyển]. Sau khi tìm hiểu thông tin từ [Nguồn thông tin], tôi rất ấn tượng với những giá trị và tầm nhìn của công ty [Tên công ty], và tôi mong muốn được trở thành một phần trong đội ngũ của Quý công ty.</p>

<p>Tôi đã có [Số năm kinh nghiệm hoặc kỹ năng nổi bật] trong lĩnh vực [Lĩnh vực chuyên môn], với các kỹ năng chính bao gồm: [Liệt kê các kỹ năng nổi bật]. Một số dự án tiêu biểu tôi từng tham gia là [Nêu ví dụ dự án/nghiệp vụ quan trọng]. Những kinh nghiệm này giúp tôi tự tin rằng mình có thể đóng góp hiệu quả vào sự phát triển của công ty.</p>

<p>Tôi đính kèm CV và các tài liệu liên quan để Quý công ty có thể tham khảo thêm về quá trình học tập và làm việc của tôi. Tôi rất mong có cơ hội được trao đổi trực tiếp để thảo luận thêm về cách tôi có thể đóng góp vào sự thành công của công ty.</p>

<p>Trân trọng cảm ơn Quý công ty đã dành thời gian đọc email này. Rất mong nhận được phản hồi từ Quý công ty.</p>

<p>Trân trọng,</p>
<p>[Họ và tên]</p>
`

/*
    Giờ cấu trúc là thế này:
        + Layout có children là tên các section, từ đó sẽ tìm ra và gọi đến hàm getSection tương ứng
        + Nhiệm vụ của các section chỉ là chứa một layout để tạo ra được section html
        + Đưa image vào trong children luôn, vì bây giờ layout có thể phân tích ra được tất cả cấu trúc
*/

type LayoutBase = {
  before?: string;
  after?: string;
  children: string | LayoutBase | LayoutBase[];
};

type SectionItemProps = Record<string, string | number>;

type SectionProps = {
  label: LayoutBase;
  layout: LayoutBase;
  content: SectionItemProps[];
  schema: any;
}

type CoverLetterprosp = {
  layout: LayoutBase;
  personalInformation: SectionProps;
  receiverInformation: SectionProps;
  letterContent: SectionProps;
}

// Tạo html từ section
function renderSectionLayout(layout: LayoutBase, content: SectionItemProps): string {
  let html = "";
  if (layout.before) {
    html += layout.before;
  }

  if (layout.children) {
    if (typeof layout.children === "string") {
      html += content[layout.children];
    } else if (Array.isArray(layout.children)) {
      html += layout.children.map((value) => renderSectionLayout(value, content)).join("");
    } else {
      html += renderSectionLayout(layout.children, content);
    }
  }

  if (layout.after) {
    html += layout.after;
  }

  return html;
}

function getSectionHtml(section: SectionProps): string {
  const { content, layout, } = section;
  const sectionHtml = content.map((sectionItem: SectionItemProps) => {
    const sectionItemHtml = renderSectionLayout(layout as LayoutBase, sectionItem);
    return sectionItemHtml;
  }).join("");

  return sectionHtml;
};
// Tạo html từ section END

// Tạo html main từ layout
function renderMainLayout(layout: LayoutBase, data: Record<string, SectionProps>): string {
  let html = "";

  if (layout.before) {
    html += layout.before;
  }

  if (layout.children) {
    if (typeof layout.children === "string") {
      html += getSectionHtml(data[layout.children]);
    } else if (Array.isArray(layout.children)) {
      html += layout.children.map((value) => renderMainLayout(value, data)).join("");
    } else {
      html += renderMainLayout(layout.children, data);
    }
  }

  if (layout.after) {
    html += layout.after;
  }

  return html;
}

const dataDemo: CoverLetterprosp = {
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
}

// Generate the HTML
const htmlBody = document.querySelector('body');
const { layout, ...dataValue } = dataDemo;
const htmlOutput = renderMainLayout(dataDemo.layout, dataValue);
if (htmlBody) {
  htmlBody.innerHTML = htmlOutput;
}