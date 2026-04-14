import React, { useEffect, useState } from 'react';
import {
  Mail,
  Lock,
  User,
  CheckCircle2,
  ArrowRight,
  Languages,
  Instagram,
  Facebook,
  MessageCircle,
  Eye,
  EyeOff,
  AlertTriangle,
  Send,
  BookOpen,
  BarChart3,
  CalendarDays,
  Bell,
  PlayCircle,
  FileText,
  ClipboardList,
  ArrowLeft,
  BookMarked,
} from 'lucide-react';
import novaLogo from './assets/nova-logo.png';

const NovaPerfect = () => {
  const [lang, setLang] = useState('en');
  const [view, setView] = useState('register');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1400
  );

  const [currentPage, setCurrentPage] = useState('home');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isArabic = lang === 'ar';
  const isTablet = screenWidth <= 1100;
  const isMobile = screenWidth <= 768;

  const content = {
    en: {
      createAcc: 'Create Account',
      signIn: 'Sign In',
      fullName: 'Full Name',
      email: 'Email Address',
      pass: 'Password',
      confirmPass: 'Confirm Password',
      btnRegister: 'Get Started',
      btnLogin: 'Login Now',
      switchToLogin: 'Already have an account?',
      switchToRegister: "Don't have an account?",
      contactTitle: 'Connect With Us',
      successTitleRegister: 'Account Created!',
      successDescRegister: "We've sent a verification link to your email.",
      successTitleLogin: 'Welcome Back!',
      successDescLogin: 'You have logged in successfully.',
      invalidEmail: 'Please enter a valid email address',
      weakPassword: 'Password must be at least 8 characters',
      fullNameRequired: 'Full name is required',
      passwordMismatch: 'Passwords do not match',
      loginSuccessBtn: 'Go to Dashboard',
      registerHint:
        'Create your account and start your smart learning journey.',
      loginHint: 'Sign in securely to access your learning dashboard.',
      gmailSupport: 'Gmail Support',
      telegramContact: 'Telegram Support',
      whatsappSupport: 'WhatsApp Support',
      facebookPage: 'Facebook',
      instagramPage: 'Instagram',
      footer: '© 2026 E-LEARNING NOVA',
      heroTitle: 'Knowledge for a Smart Future.',
      heroDesc:
        'Join the smart learning platform and begin your academic journey with a modern digital experience.',
      processing: 'Processing...',
      brandMini: 'E-Learning Nova',
      previewTitle: 'Platform Preview',
      previewDesc:
        'A modern academic environment designed for smart universities.',
      card1Title: 'Courses & Lectures',
      card1Desc:
        'Access enrolled courses, lecture videos, and learning materials.',
      card2Title: 'Assignments & Exams',
      card2Desc:
        'Track deadlines, upcoming tests, and academic submissions.',
      card3Title: 'Analytics & Progress',
      card3Desc:
        'Monitor your performance, attendance, and course progress.',
      navFeature1: 'Courses',
      navFeature2: 'Schedule',
      navFeature3: 'Grades',
      navFeature4: 'Notifications',
      quickTitle: 'Quick Access',
      quickDesc: 'Open any section to preview its current content.',
      quick1: 'Assignments',
      quick2: 'Exams',
      quick3: 'Lectures',
      quick4: 'Courses',
      quick5: 'Schedule',
      quick6: 'Grades',
      quick7: 'Notifications',
      backHome: 'Back to Home',
      emptyTitle: 'Section Preview',
      pages: {
        courses: {
          title: 'Courses',
          desc: 'No courses are available to display right now.',
        },
        schedule: {
          title: 'Schedule',
          desc: 'There is no schedule available to display right now.',
        },
        grades: {
          title: 'Grades',
          desc: 'Please sign in first to view your grades.',
        },
        notifications: {
          title: 'Notifications',
          desc: 'There are no notifications to display yet.',
        },
        assignments: {
          title: 'Assignments',
          desc: 'There are no assignments available right now.',
        },
        exams: {
          title: 'Exams',
          desc: 'There are no scheduled exams at the moment.',
        },
        lectures: {
          title: 'Lectures',
          desc: 'There are no lectures available to display right now.',
        },
      },
    },
    ar: {
      createAcc: 'إنشاء حساب',
      signIn: 'تسجيل الدخول',
      fullName: 'الاسم بالكامل',
      email: 'البريد الإلكتروني',
      pass: 'كلمة المرور',
      confirmPass: 'تأكيد كلمة المرور',
      btnRegister: 'ابدأ الآن',
      btnLogin: 'سجّل الدخول',
      switchToLogin: 'لديك حساب بالفعل؟',
      switchToRegister: 'ليس لديك حساب؟',
      contactTitle: 'تواصل معنا',
      successTitleRegister: 'تم إنشاء الحساب!',
      successDescRegister: 'تم إرسال رابط التفعيل إلى بريدك الإلكتروني.',
      successTitleLogin: 'مرحبًا بعودتك!',
      successDescLogin: 'تم تسجيل الدخول بنجاح.',
      invalidEmail: 'من فضلك أدخل بريدًا إلكترونيًا صحيحًا',
      weakPassword: 'كلمة المرور يجب ألا تقل عن 8 أحرف',
      fullNameRequired: 'الاسم بالكامل مطلوب',
      passwordMismatch: 'كلمتا المرور غير متطابقتين',
      loginSuccessBtn: 'الانتقال للوحة التحكم',
      registerHint: 'أنشئ حسابك وابدأ رحلتك في التعلم الذكي.',
      loginHint: 'سجّل الدخول بأمان للوصول إلى لوحة التعلم الخاصة بك.',
      gmailSupport: 'دعم البريد',
      telegramContact: 'دعم تيليجرام',
      whatsappSupport: 'دعم واتساب',
      facebookPage: 'فيسبوك',
      instagramPage: 'إنستجرام',
      footer: '© 2026 E-LEARNING NOVA',
      heroTitle: 'المعرفة من أجل مستقبل أذكى.',
      heroDesc:
        'انضم إلى منصة التعلم الذكي وابدأ رحلتك الأكاديمية بتجربة رقمية حديثة.',
      processing: 'جاري المعالجة...',
      brandMini: 'E-Learning Nova',
      previewTitle: 'عرض المنصة',
      previewDesc: 'بيئة أكاديمية حديثة مصممة للجامعات الذكية.',
      card1Title: 'المقررات والمحاضرات',
      card1Desc: 'الوصول إلى المواد المسجلة، الفيديوهات، وملفات التعلم.',
      card2Title: 'الواجبات والاختبارات',
      card2Desc: 'متابعة المواعيد النهائية والاختبارات القادمة والتسليمات.',
      card3Title: 'التحليل والتقدم',
      card3Desc: 'مراقبة الأداء والحضور ونسبة التقدم في المقررات.',
      navFeature1: 'المقررات',
      navFeature2: 'الجدول',
      navFeature3: 'الدرجات',
      navFeature4: 'الإشعارات',
      quickTitle: 'وصول سريع',
      quickDesc: 'افتح أي قسم لعرض محتواه الحالي.',
      quick1: 'الواجبات',
      quick2: 'الاختبارات',
      quick3: 'المحاضرات',
      quick4: 'المقررات',
      quick5: 'الجدول',
      quick6: 'الدرجات',
      quick7: 'الإشعارات',
      backHome: 'الرجوع للرئيسية',
      emptyTitle: 'عرض القسم',
      pages: {
        courses: {
          title: 'المقررات',
          desc: 'لا توجد مقررات متاحة للعرض حاليًا.',
        },
        schedule: {
          title: 'الجدول',
          desc: 'لا يوجد جدول دراسي لعرضه الآن.',
        },
        grades: {
          title: 'الدرجات',
          desc: 'يرجى تسجيل الدخول أولًا لعرض الدرجات.',
        },
        notifications: {
          title: 'الإشعارات',
          desc: 'لا توجد إشعارات بعد لعرضها.',
        },
        assignments: {
          title: 'الواجبات',
          desc: 'لا توجد واجبات متاحة حاليًا.',
        },
        exams: {
          title: 'الاختبارات',
          desc: 'لا توجد اختبارات مجدولة حاليًا.',
        },
        lectures: {
          title: 'المحاضرات',
          desc: 'لا توجد محاضرات متاحة للعرض حاليًا.',
        },
      },
    },
  };

  const t = content[lang];

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.fontFamily = isArabic
      ? "'Cairo', sans-serif"
      : "'Inter', sans-serif";
    document.body.style.background =
      'linear-gradient(135deg, #06101f 0%, #0a1830 35%, #10244a 68%, #1b2155 100%)';
  }, [isArabic]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = {
    email: 'mailto:alaa.f.elsayed@gmail.com',
    telegram: 'https://t.me/alaa_fawzy_eld',
    whatsapp: 'https://wa.me/201554194309',
    facebook: 'https://www.facebook.com/Alaa.Fawzy.Sayed',
    instagram:
      'https://www.instagram.com/alaaf.alsayed?igsh=MWQ4Z2J3cWV4c3hsNw==',
  };

  const resetMessages = () => {
    setError('');
    setSuccess(false);
  };

  const handleLangToggle = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
    resetMessages();
  };

  const handleViewChange = () => {
    setView((prev) => (prev === 'register' ? 'login' : 'register'));
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setShowPass(false);
    setShowConfirmPass(false);
    resetMessages();
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (error) setError('');
    if (success) setSuccess(false);
  };

  const openPage = (pageKey) => {
    setCurrentPage(pageKey);
  };

  const isValidEmail = (email) => {
    const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return basicEmailRegex.test(email);
  };

  const validateForm = () => {
    if (view === 'register' && !formData.name.trim()) {
      return t.fullNameRequired;
    }

    if (!formData.email.trim()) {
      return t.invalidEmail;
    }

    if (!isValidEmail(formData.email.trim())) {
      return t.invalidEmail;
    }

    if (formData.password.length < 8) {
      return t.weakPassword;
    }

    if (view === 'register' && formData.password !== formData.confirmPassword) {
      return t.passwordMismatch;
    }

    return '';
  };

  const handleAction = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const endpoint = view === 'register' ? '/api/auth/register' : '/api/auth/login';
      const body = view === 'register'
        ? { name: formData.name, email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password };

      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || (isArabic ? 'حدث خطأ غير متوقع' : 'Unexpected error occurred'));
        return;
      }

      localStorage.setItem('nova_token', data.token);
      localStorage.setItem('nova_user', JSON.stringify({ name: data.name, email: data.email }));
      setSuccess(true);
    } catch {
      setError(isArabic ? 'تعذّر الاتصال بالخادم' : 'Could not connect to server');
    } finally {
      setLoading(false);
    }
  };

  const dynamicStyles = getStyles(isArabic, isTablet, isMobile);

  const renderInnerPage = () => {
    const page = t.pages[currentPage];
    if (!page) return null;

    return (
      <div style={dynamicStyles.pageWrapper}>
        <div style={dynamicStyles.pageCard}>
          <div style={dynamicStyles.pageTopRow}>
            <button
              type="button"
              style={dynamicStyles.backBtn}
              onClick={() => setCurrentPage('home')}
            >
              <ArrowLeft
                size={18}
                style={{
                  transform: isArabic ? 'rotate(180deg)' : 'none',
                }}
              />
              {t.backHome}
            </button>
          </div>

          <div style={dynamicStyles.pageHero}>
            <div style={dynamicStyles.pageIconBox}>
              <BookMarked size={28} color="#57d5ff" />
            </div>
            <h2 style={dynamicStyles.pageTitle}>{page.title}</h2>
            <p style={dynamicStyles.pageDesc}>{page.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div style={dynamicStyles.mainWrapper}>
      <div style={dynamicStyles.layoutGrid}>
        <div style={dynamicStyles.leftColumn}>
          <div style={dynamicStyles.heroSection}>
            <div style={dynamicStyles.heroLogoBox}>
              <img src={novaLogo} alt="Nova Logo" style={dynamicStyles.heroLogo} />
            </div>

            <h1 style={dynamicStyles.sideTitle}>{t.heroTitle}</h1>
            <p style={dynamicStyles.sideDesc}>{t.heroDesc}</p>
          </div>

          <div style={dynamicStyles.previewPanel}>
            <div style={dynamicStyles.previewHeader}>
              <div>
                <h3 style={dynamicStyles.previewTitle}>{t.previewTitle}</h3>
                <p style={dynamicStyles.previewDesc}>{t.previewDesc}</p>
              </div>
            </div>

            <div style={dynamicStyles.previewGrid}>
              <button
                type="button"
                style={dynamicStyles.previewCardButton}
                onClick={() => openPage('lectures')}
              >
                <div style={dynamicStyles.previewIconWrap}>
                  <PlayCircle size={20} color="#3bcfff" />
                </div>
                <h4 style={dynamicStyles.previewCardTitle}>{t.card1Title}</h4>
                <p style={dynamicStyles.previewCardDesc}>{t.card1Desc}</p>
              </button>

              <button
                type="button"
                style={dynamicStyles.previewCardButton}
                onClick={() => openPage('assignments')}
              >
                <div style={dynamicStyles.previewIconWrap}>
                  <FileText size={20} color="#8b5cf6" />
                </div>
                <h4 style={dynamicStyles.previewCardTitle}>{t.card2Title}</h4>
                <p style={dynamicStyles.previewCardDesc}>{t.card2Desc}</p>
              </button>

              <div style={dynamicStyles.previewCardWide}>
                <div style={dynamicStyles.chartHeader}>
                  <div style={dynamicStyles.chartBadge}>
                    <BarChart3 size={16} />
                  </div>
                  <span style={dynamicStyles.chartTitle}>
                    {t.card3Title}
                  </span>
                </div>

                <div style={dynamicStyles.barWrap}>
                  <div style={{ ...dynamicStyles.bar, height: '55%' }}></div>
                  <div style={{ ...dynamicStyles.bar, height: '78%' }}></div>
                  <div style={{ ...dynamicStyles.bar, height: '62%' }}></div>
                  <div style={{ ...dynamicStyles.bar, height: '90%' }}></div>
                  <div style={{ ...dynamicStyles.bar, height: '70%' }}></div>
                </div>

                <p style={dynamicStyles.previewCardDesc}>{t.card3Desc}</p>
              </div>
            </div>
          </div>

          <div style={dynamicStyles.quickSection}>
            <div style={dynamicStyles.quickHeader}>
              <h3 style={dynamicStyles.quickTitle}>{t.quickTitle}</h3>
              <p style={dynamicStyles.quickDesc}>{t.quickDesc}</p>
            </div>

            <div style={dynamicStyles.quickGrid}>
              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('assignments')}
              >
                <ClipboardList size={20} color="#53e0ff" />
                <span>{t.quick1}</span>
              </button>

              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('exams')}
              >
                <FileText size={20} color="#7a5cff" />
                <span>{t.quick2}</span>
              </button>

              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('lectures')}
              >
                <PlayCircle size={20} color="#53e0ff" />
                <span>{t.quick3}</span>
              </button>

              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('courses')}
              >
                <BookOpen size={20} color="#7a5cff" />
                <span>{t.quick4}</span>
              </button>

              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('schedule')}
              >
                <CalendarDays size={20} color="#53e0ff" />
                <span>{t.quick5}</span>
              </button>

              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('grades')}
              >
                <BarChart3 size={20} color="#7a5cff" />
                <span>{t.quick6}</span>
              </button>

              <button
                type="button"
                style={dynamicStyles.quickCard}
                onClick={() => openPage('notifications')}
              >
                <Bell size={20} color="#53e0ff" />
                <span>{t.quick7}</span>
              </button>
            </div>
          </div>

          <div style={dynamicStyles.contactSection}>
            <h4 style={dynamicStyles.contactHeader}>{t.contactTitle}</h4>

            <div style={dynamicStyles.contactGrid}>
              <a href={socialLinks.email} style={dynamicStyles.contactLink}>
                <Mail size={18} color="#53e0ff" />
                {t.gmailSupport}
              </a>

              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noreferrer"
                style={dynamicStyles.contactLink}
              >
                <Send size={18} color="#53e0ff" />
                {t.telegramContact}
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={dynamicStyles.contactLink}
              >
                <MessageCircle size={18} color="#53e0ff" />
                {t.whatsappSupport}
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                style={dynamicStyles.contactLink}
              >
                <Facebook size={18} color="#53e0ff" />
                {t.facebookPage}
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                style={dynamicStyles.contactLink}
              >
                <Instagram size={18} color="#53e0ff" />
                {t.instagramPage}
              </a>
            </div>
          </div>
        </div>

        <div style={dynamicStyles.formColumn}>
          <div style={dynamicStyles.formCard}>
            <div style={dynamicStyles.topBrandRow}>
              <span style={dynamicStyles.topBrandDot}></span>
              <span style={dynamicStyles.topBrandText}>{t.brandMini}</span>
            </div>

            <h3 style={dynamicStyles.formTitle}>
              {view === 'register' ? t.createAcc : t.signIn}
            </h3>

            <p style={dynamicStyles.formHint}>
              {view === 'register' ? t.registerHint : t.loginHint}
            </p>

            {success ? (
              <div style={dynamicStyles.successBox}>
                <CheckCircle2 size={50} color="#22c7ff" />
                <h4 style={dynamicStyles.successTitle}>
                  {view === 'register'
                    ? t.successTitleRegister
                    : t.successTitleLogin}
                </h4>
                <p style={dynamicStyles.successDesc}>
                  {view === 'register'
                    ? t.successDescRegister
                    : t.successDescLogin}
                </p>

                <button
                  type="button"
                  style={dynamicStyles.secondaryBtn}
                  onClick={() => {
                    setSuccess(false);
                    if (view === 'register') setView('login');
                  }}
                >
                  {view === 'register' ? t.signIn : t.loginSuccessBtn}
                </button>
              </div>
            ) : (
              <form style={dynamicStyles.form} onSubmit={handleAction}>
                {error && (
                  <div style={dynamicStyles.errorBox}>
                    <AlertTriangle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                {view === 'register' && (
                  <div style={dynamicStyles.inputWrapper}>
                    <User style={dynamicStyles.icon} size={18} />
                    <input
                      type="text"
                      placeholder={t.fullName}
                      style={dynamicStyles.input}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                )}

                <div style={dynamicStyles.inputWrapper}>
                  <Mail style={dynamicStyles.icon} size={18} />
                  <input
                    type="email"
                    placeholder={t.email}
                    style={dynamicStyles.input}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div style={dynamicStyles.inputWrapper}>
                  <Lock style={dynamicStyles.icon} size={18} />
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder={t.pass}
                    style={dynamicStyles.input}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((prev) => !prev)}
                    style={dynamicStyles.eyeIconButton}
                    aria-label={showPass ? 'Hide password' : 'Show password'}
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {view === 'register' && (
                  <div style={dynamicStyles.inputWrapper}>
                    <Lock style={dynamicStyles.icon} size={18} />
                    <input
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder={t.confirmPass}
                      style={dynamicStyles.input}
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange('confirmPassword', e.target.value)
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPass((prev) => !prev)}
                      style={dynamicStyles.eyeIconButton}
                      aria-label={
                        showConfirmPass
                          ? 'Hide confirm password'
                          : 'Show confirm password'
                      }
                    >
                      {showConfirmPass ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  style={{
                    ...dynamicStyles.submitBtn,
                    opacity: loading ? 0.75 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                  disabled={loading}
                >
                  {loading
                    ? t.processing
                    : view === 'register'
                    ? t.btnRegister
                    : t.btnLogin}

                  {!loading && (
                    <ArrowRight
                      size={18}
                      style={{
                        transform: isArabic ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  )}
                </button>

                <p style={dynamicStyles.switchText}>
                  {view === 'register'
                    ? t.switchToLogin
                    : t.switchToRegister}{' '}
                  <span onClick={handleViewChange} style={dynamicStyles.link}>
                    {view === 'register' ? t.signIn : t.createAcc}
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} style={dynamicStyles.container}>
      <div style={dynamicStyles.backgroundGlowOne}></div>
      <div style={dynamicStyles.backgroundGlowTwo}></div>

      <nav style={dynamicStyles.navbar}>
        <div style={dynamicStyles.navLogo}>
          <img
            src={novaLogo}
            alt="E-Learning Nova Logo"
            style={dynamicStyles.logoImage}
          />
          <span style={dynamicStyles.logoText}>
            E-LEARNING <span style={{ color: '#57d5ff' }}>NOVA</span>
          </span>
        </div>

        <div style={dynamicStyles.navCenter}>
          <button
            type="button"
            style={dynamicStyles.navLinkButton}
            onClick={() => openPage('courses')}
          >
            <BookOpen size={16} />
            {t.navFeature1}
          </button>

          <button
            type="button"
            style={dynamicStyles.navLinkButton}
            onClick={() => openPage('schedule')}
          >
            <CalendarDays size={16} />
            {t.navFeature2}
          </button>

          <button
            type="button"
            style={dynamicStyles.navLinkButton}
            onClick={() => openPage('grades')}
          >
            <BarChart3 size={16} />
            {t.navFeature3}
          </button>

          <button
            type="button"
            style={dynamicStyles.navLinkButton}
            onClick={() => openPage('notifications')}
          >
            <Bell size={16} />
            {t.navFeature4}
          </button>
        </div>

        <div style={dynamicStyles.navActions}>
          <button onClick={handleLangToggle} style={dynamicStyles.langBtn}>
            <Languages size={18} />
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>
      </nav>

      {currentPage === 'home' ? renderHome() : renderInnerPage()}

      <footer style={dynamicStyles.footer}>{t.footer}</footer>
    </div>
  );
};

const getStyles = (isArabic, isTablet, isMobile) => {
  const iconSide = isArabic ? 'right' : 'left';
  const eyeSide = isArabic ? 'left' : 'right';

  return {
    container: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background:
        'radial-gradient(circle at top left, rgba(30,167,255,0.14), transparent 20%), radial-gradient(circle at bottom right, rgba(122,92,255,0.12), transparent 24%), linear-gradient(135deg, #06101f 0%, #0a1830 35%, #10244a 68%, #1b2155 100%)',
      color: '#ffffff',
    },

    backgroundGlowOne: {
      position: 'absolute',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background:
        'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 70%)',
      top: '-120px',
      left: '-120px',
      pointerEvents: 'none',
      zIndex: 0,
    },

    backgroundGlowTwo: {
      position: 'absolute',
      width: '520px',
      height: '520px',
      borderRadius: '50%',
      background:
        'radial-gradient(circle, rgba(139,92,246,0.16) 0%, rgba(139,92,246,0) 70%)',
      bottom: '-150px',
      right: '-120px',
      pointerEvents: 'none',
      zIndex: 0,
    },

    navbar: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      padding: isMobile ? '14px 18px' : '18px 34px',
      background: 'rgba(8, 18, 38, 0.72)',
      borderBottom: '1px solid rgba(83, 224, 255, 0.10)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
    },

    navLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: 'fit-content',
    },

    logoImage: {
      width: '44px',
      height: '44px',
      objectFit: 'contain',
      borderRadius: '12px',
      background: 'rgba(6,16,31,0.85)',
      padding: '4px',
      boxShadow: '0 0 12px rgba(59,130,246,0.14)',
    },

    logoText: {
      fontWeight: '900',
      fontSize: isMobile ? '18px' : '24px',
      color: '#ffffff',
      letterSpacing: '-0.6px',
    },

    navCenter: {
      display: isTablet ? 'none' : 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 14px',
      borderRadius: '999px',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))',
      border: '1px solid rgba(83,224,255,0.10)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    },

    navLinkButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      fontSize: '13px',
      color: 'rgba(232,241,255,0.82)',
      fontWeight: '700',
      whiteSpace: 'nowrap',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 6px',
    },

    navActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },

    langBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 16px',
      borderRadius: '999px',
      border: '1px solid rgba(83,224,255,0.14)',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      color: '#ffffff',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '13px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
    },

    mainWrapper: {
      position: 'relative',
      zIndex: 1,
      padding: isMobile ? '22px 12px' : '24px 24px 24px',
      maxWidth: '1450px',
      margin: '0 auto',
    },

    layoutGrid: {
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1.35fr 0.85fr',
      gap: '22px',
      alignItems: 'start',
    },

    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
    },

    formColumn: {
      display: 'flex',
      flexDirection: 'column',
    },

    heroSection: {
      background:
        'linear-gradient(135deg, rgba(20,44,94,0.92) 0%, rgba(18,103,190,0.84) 52%, rgba(93,76,186,0.72) 100%)',
      borderRadius: '30px',
      padding: isMobile ? '26px 20px' : '34px',
      color: '#ffffff',
      boxShadow: '0 30px 80px rgba(17, 31, 68, 0.28)',
      border: '1px solid rgba(255,255,255,0.10)',
      overflow: 'hidden',
      position: 'relative',
    },

    heroLogoBox: {
      marginBottom: '16px',
      display: 'flex',
      justifyContent: isArabic ? 'flex-end' : 'flex-start',
    },

    heroLogo: {
      width: isMobile ? '100px' : '122px',
      height: 'auto',
      objectFit: 'contain',
      borderRadius: '18px',
      background: 'rgba(6,16,31,0.55)',
      padding: '8px',
      boxShadow: '0 0 20px rgba(59,130,246,0.16)',
    },

    sideTitle: {
      fontSize: isMobile ? '30px' : '46px',
      lineHeight: 1.08,
      margin: '0 0 14px',
      fontWeight: '900',
      maxWidth: '620px',
    },

    sideDesc: {
      margin: 0,
      maxWidth: '650px',
      fontSize: isMobile ? '14px' : '16px',
      lineHeight: 1.9,
      color: 'rgba(255,255,255,0.92)',
    },

    previewPanel: {
      background: 'rgba(10, 20, 40, 0.72)',
      border: '1px solid rgba(83,224,255,0.08)',
      borderRadius: '28px',
      padding: isMobile ? '20px 16px' : '24px',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 18px 45px rgba(0,0,0,0.14)',
    },

    previewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '18px',
    },

    previewTitle: {
      margin: 0,
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: '900',
    },

    previewDesc: {
      margin: '6px 0 0',
      color: 'rgba(227,237,255,0.72)',
      fontSize: '14px',
      lineHeight: 1.7,
    },

    previewGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '16px',
    },

    previewCardButton: {
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      borderRadius: '22px',
      padding: '18px',
      border: '1px solid rgba(83,224,255,0.08)',
      boxShadow: '0 10px 24px rgba(0,0,0,0.10)',
      textAlign: isArabic ? 'right' : 'left',
      cursor: 'pointer',
      color: '#ffffff',
    },

    previewCardWide: {
      gridColumn: isMobile ? 'span 1' : 'span 2',
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      borderRadius: '22px',
      padding: '18px',
      border: '1px solid rgba(83,224,255,0.08)',
      boxShadow: '0 10px 24px rgba(0,0,0,0.10)',
    },

    previewIconWrap: {
      width: '42px',
      height: '42px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.14))',
      marginBottom: '12px',
    },

    previewCardTitle: {
      margin: '0 0 8px',
      fontSize: '17px',
      fontWeight: '800',
      color: '#ffffff',
    },

    previewCardDesc: {
      margin: 0,
      color: 'rgba(227,237,255,0.72)',
      fontSize: '14px',
      lineHeight: 1.7,
    },

    chartHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '16px',
    },

    chartBadge: {
      width: '36px',
      height: '36px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(139,92,246,0.16))',
      color: '#53e0ff',
    },

    chartTitle: {
      fontWeight: '800',
      color: '#ffffff',
      fontSize: '16px',
    },

    barWrap: {
      height: '160px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: '12px',
      padding: '14px 0 6px',
      marginBottom: '10px',
    },

    bar: {
      flex: 1,
      borderRadius: '14px 14px 6px 6px',
      background:
        'linear-gradient(180deg, #1ea7ff 0%, #3b82f6 46%, #7a5cff 100%)',
      boxShadow: '0 10px 24px rgba(59,130,246,0.16)',
      minHeight: '26px',
    },

    quickSection: {
      background: 'rgba(10, 20, 40, 0.72)',
      border: '1px solid rgba(83,224,255,0.08)',
      borderRadius: '28px',
      padding: isMobile ? '20px 16px' : '24px',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 18px 45px rgba(0,0,0,0.14)',
    },

    quickHeader: {
      marginBottom: '18px',
    },

    quickTitle: {
      margin: '0 0 8px',
      fontSize: '22px',
      color: '#ffffff',
      fontWeight: '900',
    },

    quickDesc: {
      margin: 0,
      color: 'rgba(227,237,255,0.72)',
      fontSize: '14px',
      lineHeight: 1.7,
    },

    quickGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
      gap: '12px',
    },

    quickCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      minHeight: '100px',
      borderRadius: '18px',
      border: '1px solid rgba(83,224,255,0.08)',
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      color: '#ffffff',
      cursor: 'pointer',
      fontWeight: '700',
      textAlign: 'center',
      padding: '12px',
    },

    contactSection: {
      background: 'rgba(10, 20, 40, 0.72)',
      border: '1px solid rgba(83,224,255,0.08)',
      borderRadius: '28px',
      padding: isMobile ? '20px 16px' : '24px',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 18px 45px rgba(0,0,0,0.14)',
    },

    contactHeader: {
      margin: '0 0 18px',
      fontSize: '22px',
      fontWeight: '900',
      color: '#ffffff',
    },

    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '12px',
    },

    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      color: '#ffffff',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      border: '1px solid rgba(83,224,255,0.08)',
      padding: '14px 14px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: '700',
      boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
    },

    formCard: {
      position: 'sticky',
      top: '98px',
      background:
        'linear-gradient(180deg, rgba(9,18,36,0.86) 0%, rgba(12,24,48,0.80) 100%)',
      border: '1px solid rgba(83,224,255,0.10)',
      borderRadius: '30px',
      padding: isMobile ? '24px 16px' : '28px',
      backdropFilter: 'blur(18px)',
      boxShadow: '0 25px 60px rgba(0,0,0,0.16)',
    },

    topBrandRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px',
      color: '#97efff',
      fontWeight: '800',
      fontSize: '14px',
    },

    topBrandDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #53e0ff, #7a5cff)',
      boxShadow: '0 0 12px rgba(83,224,255,0.55)',
    },

    topBrandText: {
      letterSpacing: '0.3px',
    },

    formTitle: {
      margin: '0 0 10px',
      fontSize: isMobile ? '28px' : '34px',
      fontWeight: '900',
      color: '#ffffff',
      letterSpacing: '-0.8px',
    },

    formHint: {
      margin: '0 0 24px',
      fontSize: '14px',
      color: 'rgba(227,237,255,0.72)',
      lineHeight: 1.8,
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
    },

    inputWrapper: {
      position: 'relative',
    },

    icon: {
      position: 'absolute',
      [iconSide]: '15px',
      top: '15px',
      color: '#b9eaff',
    },

    input: {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '18px',
      border: '1px solid rgba(83,224,255,0.10)',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      color: '#ffffff',
      outline: 'none',
      padding: '15px 46px',
      fontSize: '15px',
      textAlign: isArabic ? 'right' : 'left',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
    },

    eyeIconButton: {
      position: 'absolute',
      [eyeSide]: '12px',
      top: '11px',
      border: 'none',
      background: 'transparent',
      color: '#b9eaff',
      cursor: 'pointer',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    submitBtn: {
      background:
        'linear-gradient(90deg, #1e6eff 0%, #22c7ff 50%, #7a5cff 100%)',
      color: '#ffffff',
      padding: '15px',
      borderRadius: '18px',
      border: 'none',
      fontWeight: '800',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      boxShadow: '0 18px 36px rgba(59,130,246,0.20)',
      marginTop: '4px',
    },

    switchText: {
      textAlign: 'center',
      marginTop: '8px',
      fontSize: '14px',
      color: 'rgba(227,237,255,0.72)',
      lineHeight: 1.8,
    },

    link: {
      color: '#97efff',
      fontWeight: '900',
      cursor: 'pointer',
      marginInlineStart: '4px',
    },

    successBox: {
      textAlign: 'center',
      padding: isMobile ? '32px 16px' : '44px 20px',
      background:
        'linear-gradient(135deg, rgba(56,189,248,0.10), rgba(139,92,246,0.10))',
      borderRadius: '24px',
      border: '1px solid rgba(83,224,255,0.14)',
      color: '#ffffff',
    },

    successTitle: {
      marginTop: '14px',
      marginBottom: '10px',
      fontSize: '24px',
      fontWeight: '900',
      color: '#ffffff',
    },

    successDesc: {
      fontSize: '15px',
      lineHeight: 1.8,
      margin: 0,
      color: 'rgba(227,237,255,0.78)',
    },

    secondaryBtn: {
      marginTop: '18px',
      padding: '13px 18px',
      borderRadius: '16px',
      border: '1px solid rgba(83,224,255,0.14)',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
      color: '#ffffff',
      fontWeight: '800',
      cursor: 'pointer',
    },

    errorBox: {
      background: 'rgba(255, 110, 110, 0.12)',
      color: '#ffd1d1',
      padding: '12px',
      borderRadius: '14px',
      border: '1px solid rgba(255, 130, 130, 0.18)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '13px',
      lineHeight: 1.6,
    },

    pageWrapper: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '24px 12px' : '36px 24px',
    },

    pageCard: {
      background:
        'linear-gradient(180deg, rgba(9,18,36,0.88) 0%, rgba(12,24,48,0.82) 100%)',
      border: '1px solid rgba(83,224,255,0.10)',
      borderRadius: '30px',
      padding: isMobile ? '24px 16px' : '34px',
      minHeight: '65vh',
      boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
    },

    pageTopRow: {
      display: 'flex',
      justifyContent: isArabic ? 'flex-end' : 'flex-start',
      marginBottom: '28px',
    },

    backBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
      border: '1px solid rgba(83,224,255,0.14)',
      color: '#ffffff',
      padding: '12px 16px',
      borderRadius: '14px',
      cursor: 'pointer',
      fontWeight: '700',
    },

    pageHero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isArabic ? 'flex-end' : 'flex-start',
      textAlign: isArabic ? 'right' : 'left',
      maxWidth: '700px',
    },

    pageIconBox: {
      width: '64px',
      height: '64px',
      borderRadius: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(135deg, rgba(59,130,246,0.16), rgba(139,92,246,0.16))',
      marginBottom: '18px',
    },

    pageTitle: {
      margin: '0 0 12px',
      fontSize: isMobile ? '30px' : '42px',
      fontWeight: '900',
      color: '#ffffff',
    },

    pageDesc: {
      margin: 0,
      color: 'rgba(227,237,255,0.78)',
      fontSize: isMobile ? '16px' : '18px',
      lineHeight: 1.9,
    },

    footer: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: '18px 16px 24px',
      color: 'rgba(227,237,255,0.58)',
      fontSize: '12px',
    },
  };
};

export default NovaPerfect;