import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-lg font-bold mb-4">Giới thiệu công ty</h2>
            <p>
              Your Company là một công ty chuyên cung cấp các dịch vụ tuyệt vời cho khách hàng. Chúng tôi cam kết mang lại trải nghiệm tốt nhất và sự hài lòng cho bạn.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Phương thức liên hệ</h2>
            <ul className="space-y-2">
              <li>Email: yourcompany@example.com</li>
              <li>Số điện thoại: (123) 456-7890</li>
              <li>Địa chỉ: 123 Đường ABC, Thành phố XYZ</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Column 2</h2>
            <ul className="space-y-2">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Bản đồ</h2>
            <div className="w-full  bg-gray-600"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1689700057230!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </div>
     
      </div>
      <div className="bg-gray-800 py-4 text-white text-center">
      <p>© 2023 Your Company. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;
