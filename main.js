let IPInfo = {}
fetch("https://ip.useragentinfo.com/json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    IPInfo = res;
  });

document.querySelector('.card_list1').addEventListener('click', function () {
  document.querySelector('.pop11').style.display = 'block';
})

function closeDialog11() {
  document.querySelector('.pop11').style.display = 'none';
}

document.querySelector('.chouka').addEventListener('click', function () {
  document.querySelector('.popBox').classList.remove('hide');
  document.querySelector('.popBox').classList.add('active');
  document.querySelector('.popBox .bind').classList.add('active');
})

document.querySelector('#sMobile')

document.querySelector('#getCode').addEventListener('click', () => {
  if (document.querySelector('#getCode').classList.contains('disabled')) {
    return;
  }
  let mobile = document.querySelector('#sMobile').value;
  if (!mobile) {
    alert('请输入手机号');
    return;
  }
  if (!/^1[3456789]\d{9}$/.test(mobile)) {
    alert('请输入正确的手机号');
    return;
  }
  document.querySelector('#getCode').classList.add('disabled');
  document.querySelector('#getCode').innerHTML = '60s后';
  let time = 60;
  let timer = setInterval(() => {
    time--;
    document.querySelector('#getCode').innerHTML = time + 's后';
    if (time <= 0) {
      clearInterval(timer);
      document.querySelector('#getCode').classList.remove('disabled');
      document.querySelector('#getCode').innerHTML = '获取验证码';
    }
  }, 1000);
  const isDev = location.hostname === "localhost";
  const baseUrl = isDev
    ? "http://localhost:5000/"
    : "https://service-8zqb5ngm-1253419200.gz.apigw.tencentcs.com/";

  fetch(baseUrl+"sendSMS?phone="+mobile).then(res => {
    return res.json()
  }).then(res => {
    console.log(x, '===========打印的 ------ ');
  })
})


document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.popBox').classList.add('hide');
  document.querySelector('.popBox').classList.remove('active');
})

document.querySelector('.bindBtn').addEventListener('click', () => {
  let mobile = document.querySelector('#sMobile').value;
  let code = document.querySelector('.sms-code').value;
  if (!mobile) {
    alert('请输入手机号');
    return;
  }
  if (!/^1[3456789]\d{9}$/.test(mobile)) {
    alert('请输入正确的手机号');
    return;
  }
  if (!code) {
    alert('请输入验证码');
    return;
  }
  const isDev = location.hostname === "localhost";
  const baseUrl = isDev
    ? "http://localhost:5000/"
    : "https://service-8zqb5ngm-1253419200.gz.apigw.tencentcs.com/";
  fetch(baseUrl + "yinliu/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: mobile,
      href: window.location.href,
      host: location.host,
      IPInfo,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert('绑定成功, 去观看视频吧');
      document.querySelector('.popBox').classList.add('hide');
      document.querySelector('.popBox').classList.remove('active');
    }).finally(() => {
  })
})