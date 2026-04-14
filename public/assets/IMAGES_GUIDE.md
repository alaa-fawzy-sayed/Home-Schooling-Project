# دليل الصور - Images Guide

## ✅ الصور الموجودة - Available Images

### 1. logo.svg ✅
- **الاستخدام**: شعار E-Learning Nova الرئيسي
- **الموقع**: `public/assets/logo.svg`
- **الحالة**: ✅ موجود

## 📝 الصور المطلوبة - Required Images

يمكنك استخدام نفس الشعار لجميع الأماكن، أو إضافة صور مخصصة:

### الخيار 1: استخدام الشعار الموجود (موصى به)
التطبيق سيستخدم `logo.svg` تلقائياً لجميع الأماكن.

### الخيار 2: إضافة صور مخصصة
إذا أردت صور مختلفة، أضف:

1. **logo.png** - شعار صغير للـ Navigation
   - الحجم الموصى به: 48×48 بكسل
   - الاستخدام: WelcomePage navigation bar

2. **nova-logo.png** - شعار Nova
   - الحجم الموصى به: 44×44 بكسل
   - الاستخدام: RegisterPage navigation

3. **preview.png** - صورة معاينة المنصة
   - الحجم الموصى به: 380×420 بكسل
   - الاستخدام: WelcomePage holographic frame

## 🔧 كيفية التحويل

إذا أردت تحويل logo.svg إلى PNG:

### على macOS:
```bash
# تحويل إلى PNG بحجم 48x48
sips -s format png logo.svg --out logo.png --resampleWidth 48

# تحويل إلى PNG بحجم 44x44
sips -s format png logo.svg --out nova-logo.png --resampleWidth 44

# تحويل إلى PNG بحجم 380x420
sips -s format png logo.svg --out preview.png --resampleWidth 380
```

### باستخدام ImageMagick:
```bash
convert logo.svg -resize 48x48 logo.png
convert logo.svg -resize 44x44 nova-logo.png
convert logo.svg -resize 380x420 preview.png
```

### أونلاين:
استخدم أي موقع لتحويل SVG إلى PNG مثل:
- https://cloudconvert.com/svg-to-png
- https://convertio.co/svg-png/

## 📌 ملاحظات

- الصور يجب أن تكون في مجلد `public/assets/`
- استخدم PNG للشفافية
- احفظ الصور بجودة عالية
- تأكد من الأسماء الصحيحة للملفات

---

**الحالة الحالية**: ✅ لديك الشعار الأساسي، التطبيق جاهز للعمل!
