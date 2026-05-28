/* ─── Theme System ──────────────────────────────────────────────── */
const THEMES = {
  teal: { name: 'Teal', primary: '#0d9488', gradient: 'linear-gradient(135deg, #0d9488, #14b8a6)' },
  indigo: { name: 'Indigo', primary: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #818cf8)' },
  rose: { name: 'Rose', primary: '#e11d48', gradient: 'linear-gradient(135deg, #e11d48, #fb7185)' },
  amber: { name: 'Amber', primary: '#d97706', gradient: 'linear-gradient(135deg, #d97706, #fbbf24)' },
  emerald: { name: 'Emerald', primary: '#059669', gradient: 'linear-gradient(135deg, #059669, #34d399)' },
  violet: { name: 'Violet', primary: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)' },
};

const SIDEBAR_PRESETS = [
  { name: 'Deep Teal', gradient: 'linear-gradient(135deg, #0b1f1d, #0d9488, #0b1f1d)' },
  { name: 'Midnight', gradient: 'linear-gradient(135deg, #0a0a0f, #1e1b4b, #0a0a0f)' },
  { name: 'Sunset Glow', gradient: 'linear-gradient(135deg, #1a0a10, #e11d48, #1a0a10)' },
  { name: 'Forest Dark', gradient: 'linear-gradient(135deg, #021f16, #059669, #021f16)' },
  { name: 'Ocean Deep', gradient: 'linear-gradient(135deg, #071428, #0284c7, #071428)' },
];

const STUDENT_AVATARS = [
  { id: 'avatar1', emoji: '😀', color: '#0d9488', name: 'Happy' },
  { id: 'avatar2', emoji: '🌟', color: '#f59e0b', name: 'Star' },
  { id: 'avatar3', emoji: '🦊', color: '#f97316', name: 'Fox' },
  { id: 'avatar4', emoji: '🐱', color: '#8b5cf6', name: 'Cat' },
  { id: 'avatar5', emoji: '🐶', color: '#ec4899', name: 'Dog' },
  { id: 'avatar6', emoji: '🦁', color: '#fbbf24', name: 'Lion' },
  { id: 'avatar7', emoji: '🐧', color: '#3b82f6', name: 'Penguin' },
  { id: 'avatar8', emoji: '🐨', color: '#6b7280', name: 'Koala' },
  { id: 'avatar9', emoji: '🐼', color: '#1f2937', name: 'Panda' },
  { id: 'avatar10', emoji: '🦄', color: '#c084fc', name: 'Unicorn' },
  { id: 'avatar11', emoji: '🐸', color: '#10b981', name: 'Frog' },
  { id: 'avatar12', emoji: '🐙', color: '#ef4444', name: 'Octopus' },
];

const ACHIEVEMENTS = [
  { id: 'perfect_week', name: 'Perfect Week', icon: '🌟', description: 'Perfect attendance for a full week' },
  { id: 'early_bird', name: 'Early Bird', icon: '🐦', description: 'Never late for a month' },
  { id: 'class_star', name: 'Class Star', icon: '⭐', description: '90%+ attendance rate' },
  { id: 'perfect_month', name: 'Perfect Month', icon: '🏆', description: 'Perfect attendance for a whole month' },
  { id: 'rocket', name: 'Rocket', icon: '🚀', description: 'Improved attendance by 20%' },
  { id: 'diamond', name: 'Diamond', icon: '💎', description: '100% attendance for a month' },
];

const BANNER_PRESETS = [
  { id: 'none', name: 'No Banner', icon: '🚫', gradient: 'transparent' },
  { id: 'apples', name: 'Apple & Books', icon: '🍎📚', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)' },
  { id: 'classroom', name: 'Classroom', icon: '🏫', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5, #3730a3)' },
  { id: 'sports', name: 'Sports', icon: '⚽🏀', gradient: 'linear-gradient(135deg, #4ade80, #16a34a, #14532d)' },
  { id: 'rainbow', name: 'Rainbow', icon: '🌈', gradient: 'linear-gradient(135deg, #ef4444, #f97316, #fbbf24, #4ade80, #3b82f6)' },
  { id: 'space', name: 'Space', icon: '🚀🌙', gradient: 'linear-gradient(135deg, #1e1b4b, #3730a3, #4c1d95)' },
  { id: 'ocean', name: 'Ocean', icon: '🌊🐠', gradient: 'linear-gradient(135deg, #38bdf8, #0284c7, #075985)' },
  { id: 'sunset', name: 'Sunset', icon: '🌅', gradient: 'linear-gradient(135deg, #fbbf24, #f97316, #ec4899)' },
  { id: 'forest', name: 'Forest', icon: '🌲🍃', gradient: 'linear-gradient(135deg, #86efac, #22c55e, #166534)' },
];

/* ─── Helper Functions ───────────────────────────────────────────── */
function applyTheme(id) {
  const t = THEMES[id] || THEMES.teal;
  document.documentElement.style.setProperty('--teal', t.primary);
  localStorage.setItem('classroom_theme', id);
}

function initTheme() { 
  const saved = localStorage.getItem('classroom_theme');
  applyTheme(saved || 'teal');
}

function applySidebarGradient(gradient) {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.style.background = gradient;
  localStorage.setItem('sidebar_gradient', gradient);
}

function getSidebarGradient() {
  return localStorage.getItem('sidebar_gradient') || SIDEBAR_PRESETS[0].gradient;
}

function toast(msg, type = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function esc(s) { 
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function todayStr() { 
  return new Date().toISOString().slice(0, 10);
}

function formatDate(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function generateClassCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/* ─── Profile Picture Functions ─────────────────────────────────── */
function setStudentProfilePic(studentId, data) {
  if (data && data.startsWith('data:image')) {
    localStorage.setItem(`profile_pic_${studentId}`, data);
    localStorage.removeItem(`avatar_${studentId}`);
  } else if (data) {
    localStorage.setItem(`avatar_${studentId}`, data);
    localStorage.removeItem(`profile_pic_${studentId}`);
  }
}

function getStudentAvatarDisplay(student) {
  if (!student || !student.id) return '<span style="font-size:24px;">👤</span>';
  
  const pic = localStorage.getItem(`profile_pic_${student.id}`);
  if (pic && pic.startsWith('data:image')) {
    return `<img src="${pic}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
  }
  const avatarId = localStorage.getItem(`avatar_${student.id}`);
  if (avatarId) {
    const avatar = STUDENT_AVATARS.find(a => a.id === avatarId);
    if (avatar) return `<span style="font-size:24px;">${avatar.emoji}</span>`;
  }
  return `<span style="font-size:24px;">${student.name?.charAt(0).toUpperCase() || '?'}</span>`;
}

/* ─── Banner Functions ──────────────────────────────────────────── */
function getBanner(uid) {
  try {
    return JSON.parse(localStorage.getItem(`banner_${uid}`)) || null;
  } catch { return null; }
}

function setBanner(uid, data) {
  if (!data || data.id === 'none') {
    localStorage.removeItem(`banner_${uid}`);
  } else {
    localStorage.setItem(`banner_${uid}`, JSON.stringify(data));
  }
}

function bannerHTML(uid) {
  const b = getBanner(uid);
  if (!b || b.id === 'none') return '';
  return `<div class="dash-banner" style="background: ${b.gradient}; height: 150px; border-radius: 16px; margin-bottom: 24px; display: flex; align-items: center; justify-content: center;">
    <div class="banner-icon" style="font-size: 48px;">${b.icon}</div>
  </div>`;
}

/* ─── Achievement Functions ─────────────────────────────────────── */
function calculateAchievements(attendanceRecords) {
  const earned = [];
  const present = attendanceRecords.filter(r => r.status === 'present').length;
  const total = attendanceRecords.length;
  const rate = total > 0 ? (present / total) * 100 : 0;
  
  let maxStreak = 0;
  let currentStreak = 0;
  const sortedDates = [...attendanceRecords]
    .filter(r => r.status === 'present')
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  
  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) {
      currentStreak = 1;
    } else {
      const prevDate = new Date(sortedDates[i - 1].date);
      const currDate = new Date(sortedDates[i].date);
      const diffDays = (currDate - prevDate) / (1000 * 60 * 60 * 24);
      if (diffDays === 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
    }
    maxStreak = Math.max(maxStreak, currentStreak);
  }
  
  if (maxStreak >= 5) earned.push(ACHIEVEMENTS[0]);
  if (rate >= 90) earned.push(ACHIEVEMENTS[2]);
  if (maxStreak >= 20) earned.push(ACHIEVEMENTS[3]);
  if (rate >= 100 && total >= 20) earned.push(ACHIEVEMENTS[5]);
  
  return { earned, rate, maxStreak, present, total };
}

/* ─── Birthday Functions ────────────────────────────────────────── */
function checkBirthdays(students) {
  if (!students || !Array.isArray(students) || students.length === 0) return false;
  
  const today = new Date();
  const todayStr = `${today.getMonth() + 1}-${today.getDate()}`;
  
  for (const student of students) {
    if (student && student.birthday && student.birthday === todayStr) {
      showBirthdayModal(student.name);
      return true;
    }
  }
  return false;
}

function showBirthdayModal(studentName) {
  const modal = document.getElementById('modal-birthday');
  if (!modal) return;
  const msgEl = document.getElementById('birthday-message');
  if (msgEl) {
    msgEl.innerHTML = `🎉 Happy Birthday, ${esc(studentName)}! 🎉<br>Wishing you a fantastic day! 🎂🎈`;
  }
  modal.style.display = 'flex';
}

/* ─── App State ─────────────────────────────────────────────────── */
let currentUser = null;
let currentPage = 'attendance';
let currentDate = todayStr();
let currentClassId = 1;

/* ─── LocalStorage DB ───────────────────────────────────────────── */
function initData() {
  if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify([
      { id: 1, name: 'Emma Johnson', grade: '3rd Grade', notes: '', birthday: '3-15' },
      { id: 2, name: 'Liam Smith', grade: '3rd Grade', notes: '', birthday: '7-22' },
      { id: 3, name: 'Sophia Brown', grade: '3rd Grade', notes: '', birthday: '11-5' },
    ]));
  }
  if (!localStorage.getItem('attendance')) {
    localStorage.setItem('attendance', JSON.stringify([]));
  }
  if (!localStorage.getItem('classes')) {
    localStorage.setItem('classes', JSON.stringify([
      { id: 1, name: 'My Class', schoolName: 'My School', grade: '3rd Grade', classCode: 'ABC123' }
    ]));
  }
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
      { username: 'teacher', password: '123', role: 'teacher', name: 'Ms. Johnson' },
      { username: 'student', password: '123', role: 'student', studentId: 1, name: 'Emma Johnson' }
    ]));
  }
}

function getStudents() { 
  return JSON.parse(localStorage.getItem('students') || '[]'); 
}

function addStudent(student) { 
  const students = getStudents();
  const newStudent = { ...student, id: Date.now() };
  students.push(newStudent);
  localStorage.setItem('students', JSON.stringify(students));
  return newStudent;
}

function updateStudent(id, data) {
  const students = getStudents();
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...data };
    localStorage.setItem('students', JSON.stringify(students));
    return students[index];
  }
  return null;
}

function deleteStudent(id) {
  let students = getStudents();
  students = students.filter(s => s.id !== id);
  localStorage.setItem('students', JSON.stringify(students));
  let attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
  attendance = attendance.filter(a => a.studentId !== id);
  localStorage.setItem('attendance', JSON.stringify(attendance));
}

function getAttendance(date, studentId) {
  let attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
  if (date) attendance = attendance.filter(a => a.date === date);
  if (studentId) attendance = attendance.filter(a => a.studentId === studentId);
  return attendance;
}

function saveAttendance(record) {
  const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
  const existingIndex = attendance.findIndex(a => a.studentId === record.studentId && a.date === record.date);
  if (existingIndex !== -1) {
    attendance[existingIndex] = { ...attendance[existingIndex], ...record };
  } else {
    attendance.push({ ...record, id: Date.now() });
  }
  localStorage.setItem('attendance', JSON.stringify(attendance));
  return record;
}

function getClasses() { 
  return JSON.parse(localStorage.getItem('classes') || '[]'); 
}

function addClass(cls) {
  const classes = getClasses();
  const newClass = { ...cls, id: Date.now(), classCode: generateClassCode() };
  classes.push(newClass);
  localStorage.setItem('classes', JSON.stringify(classes));
  return newClass;
}

function updateClass(id, data) {
  const classes = getClasses();
  const index = classes.findIndex(c => c.id === id);
  if (index !== -1) {
    classes[index] = { ...classes[index], ...data };
    localStorage.setItem('classes', JSON.stringify(classes));
    return classes[index];
  }
  return null;
}

function deleteClass(id) {
  let classes = getClasses();
  classes = classes.filter(c => c.id !== id);
  localStorage.setItem('classes', JSON.stringify(classes));
}

function getClassByCode(code) {
  const classes = getClasses();
  return classes.find(c => c.classCode === code);
}

function getAttendanceSummary() {
  const students = getStudents();
  const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
  return students.map(student => {
    const studentRecords = attendance.filter(a => a.studentId === student.id);
    const present = studentRecords.filter(r => r.status === 'present').length;
    const absent = studentRecords.filter(r => r.status === 'absent').length;
    const late = studentRecords.filter(r => r.status === 'late').length;
    return {
      studentId: student.id,
      studentName: student.name,
      present, absent, late,
      total: studentRecords.length
    };
  });
}

function updateUserName(userId, newName) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const index = users.findIndex(u => u.username === userId || u.studentId === userId);
  if (index !== -1) {
    users[index].name = newName;
    localStorage.setItem('users', JSON.stringify(users));
    
    if (users[index].role === 'student' && users[index].studentId) {
      updateStudent(users[index].studentId, { name: newName });
    }
    return true;
  }
  return false;
}

initData();

/* ─── Auth Functions ────────────────────────────────────────────── */
async function showLoginScreen() {
  document.getElementById('app-layout').style.display = 'none';
  const login = document.getElementById('login-screen');
  login.style.display = 'flex';
  login.innerHTML = `
    <div class="login-left">
      <div class="login-brand">
        <div class="login-logo">📚</div>
        <div class="login-brand-name">Classroom</div>
        <div class="login-brand-sub">Attendance Tracker</div>
      </div>
      <div class="login-tagline">Track attendance, manage your class — all in one place.</div>
    </div>
    <div class="login-right">
      <div class="login-card">
        <div class="login-card-title">Sign in to your account</div>
        <div class="login-card-sub">Demo: teacher/123 or student/123</div>
        <div class="role-tabs">
          <button class="role-tab active" data-role="teacher">Teacher</button>
          <button class="role-tab" data-role="student">Student</button>
        </div>
        <div id="login-form-area"></div>
      </div>
    </div>
  `;
  
  renderRoleForm('teacher');
  
  login.querySelectorAll('.role-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      login.querySelectorAll('.role-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRoleForm(btn.dataset.role);
    });
  });
}

function renderRoleForm(role) {
  const area = document.getElementById('login-form-area');
  if (role === 'teacher') {
    area.innerHTML = `
      <form id="login-form" class="auth-form">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input class="form-input" id="auth-username" type="text" placeholder="teacher" value="teacher">
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input class="form-input" id="auth-password" type="password" placeholder="123" value="123">
        </div>
        <div id="auth-error" class="auth-error" style="display:none"></div>
        <button type="submit" class="btn btn-primary auth-submit">Sign In as Teacher</button>
        <div class="auth-divider"><span>New teacher?</span></div>
        <button type="button" class="btn btn-ghost auth-submit" id="show-register-btn">Create Teacher Account</button>
      </form>`;
  } else {
    area.innerHTML = `
      <form id="student-login-form" class="auth-form">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input class="form-input" id="student-username" type="text" placeholder="student" value="student">
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input class="form-input" id="student-password" type="password" placeholder="123" value="123">
        </div>
        <div class="auth-divider"><span>OR</span></div>
        <div class="form-group">
          <label class="form-label">Class Code</label>
          <input class="form-input" id="class-code" type="text" placeholder="Enter 6-digit class code">
        </div>
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input class="form-input" id="student-name-input" type="text" placeholder="Enter your name">
        </div>
        <div id="auth-error" class="auth-error" style="display:none"></div>
        <button type="submit" class="btn btn-primary auth-submit" id="join-class-btn">Join Class with Code</button>
        <div class="auth-divider"><span>OR</span></div>
        <button type="button" class="btn btn-ghost auth-submit" id="demo-student-btn">Use Demo Student Account</button>
      </form>`;
  }
  
  if (role === 'teacher') {
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      await handleTeacherLogin();
    });
    document.getElementById('show-register-btn')?.addEventListener('click', renderRegisterForm);
  } else {
    document.getElementById('student-login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      await handleStudentJoinClass();
    });
    document.getElementById('demo-student-btn')?.addEventListener('click', async () => {
      await handleLogin('student');
    });
  }
}

async function handleStudentJoinClass() {
  const classCode = document.getElementById('class-code')?.value.trim().toUpperCase();
  const studentName = document.getElementById('student-name-input')?.value.trim();
  const errEl = document.getElementById('auth-error');
  
  if (!classCode || !studentName) {
    errEl.textContent = 'Please enter both class code and your name';
    errEl.style.display = 'block';
    return;
  }
  
  const classInfo = getClassByCode(classCode);
  if (!classInfo) {
    errEl.textContent = 'Invalid class code. Please try again.';
    errEl.style.display = 'block';
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const newStudentId = Date.now();
  const newStudent = {
    username: 'student_' + newStudentId,
    password: '123',
    role: 'student',
    studentId: newStudentId,
    name: studentName,
    classId: classInfo.id
  };
  users.push(newStudent);
  localStorage.setItem('users', JSON.stringify(users));
  
  addStudent({ 
    id: newStudentId, 
    name: studentName, 
    grade: classInfo.grade || '',
    classId: classInfo.id 
  });
  
  currentUser = { 
    id: newStudentId,
    username: newStudent.username,
    role: 'student',
    studentId: newStudentId,
    name: studentName
  };
  localStorage.setItem('current_user', JSON.stringify(currentUser));
  document.getElementById('login-screen').style.display = 'none';
  launchApp();
  toast(`Welcome to ${classInfo.name}, ${studentName}!`, 'success');
}

async function handleTeacherLogin() {
  const username = document.getElementById('auth-username').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password && u.role === 'teacher');
  
  if (!user) {
    errEl.textContent = 'Invalid username or password';
    errEl.style.display = 'block';
    return;
  }
  
  currentUser = {
    id: 'teacher_' + Date.now(),
    username: username,
    role: 'teacher',
    name: user.name || username
  };
  localStorage.setItem('current_user', JSON.stringify(currentUser));
  document.getElementById('login-screen').style.display = 'none';
  
  if (!currentUser.name || currentUser.name === username) {
    const teacherName = prompt('Welcome! Please enter your name:', 'Ms. Johnson');
    if (teacherName) {
      updateUserName(username, teacherName);
      currentUser.name = teacherName;
      localStorage.setItem('current_user', JSON.stringify(currentUser));
    }
  }
  
  launchApp();
  toast(`Welcome back, ${currentUser.name || username}!`, 'success');
}

async function handleLogin(role) {
  const username = role === 'teacher' ? 'teacher' : 'student';
  const password = '123';
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password && u.role === role);
  
  if (!user) {
    const errEl = document.getElementById('auth-error');
    if (errEl) {
      errEl.textContent = 'Invalid username or password';
      errEl.style.display = 'block';
    }
    return;
  }
  
  currentUser = {
    id: role === 'teacher' ? 'teacher_' + Date.now() : user.studentId,
    username: username,
    role: role,
    studentId: user.studentId,
    name: user.name || username
  };
  localStorage.setItem('current_user', JSON.stringify(currentUser));
  document.getElementById('login-screen').style.display = 'none';
  launchApp();
  toast(`Welcome back, ${currentUser.name || username}!`, 'success');
}

function renderRegisterForm() {
  const area = document.getElementById('login-form-area');
  area.innerHTML = `
    <form id="register-form" class="auth-form">
      <div class="register-note"><strong>First-time setup</strong> — Create your teacher account.</div>
      <div class="form-group"><label class="form-label">Your Name</label><input class="form-input" id="reg-name" placeholder="e.g. Ms. Johnson"></div>
      <div class="form-group"><label class="form-label">School Name</label><input class="form-input" id="reg-school" placeholder="e.g. Lincoln Elementary"></div>
      <div class="form-group"><label class="form-label">Class Name</label><input class="form-input" id="reg-class" placeholder="e.g. Mrs. Smith's Class"></div>
      <div class="form-group"><label class="form-label">Username</label><input class="form-input" id="reg-username" placeholder="Choose a username"></div>
      <div class="form-group"><label class="form-label">Password</label><input class="form-input" id="reg-password" type="password" placeholder="At least 4 characters"></div>
      <div id="auth-error" class="auth-error" style="display:none"></div>
      <button type="submit" class="btn btn-primary auth-submit">Create Account</button>
      <button type="button" class="btn btn-ghost auth-submit" id="back-to-login">Back to Sign In</button>
    </form>`;
  
  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const school = document.getElementById('reg-school').value;
    const className = document.getElementById('reg-class').value;
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
    if (!username || !password || !name) {
      document.getElementById('auth-error').textContent = 'Please fill all required fields';
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ username, password, role: 'teacher', name: name });
    localStorage.setItem('users', JSON.stringify(users));
    
    const classCode = generateClassCode();
    const classes = getClasses();
    classes.push({ id: Date.now(), name: className || 'My Class', schoolName: school, grade: '', classCode });
    localStorage.setItem('classes', JSON.stringify(classes));
    
    toast('Account created! Please login.', 'success');
    showLoginScreen();
  });
  document.getElementById('back-to-login').addEventListener('click', () => showLoginScreen());
}

/* ─── Launch App ────────────────────────────────────────────────── */
async function launchApp() {
  const isStudent = currentUser?.role === 'student';
  
  if (isStudent) {
    showStudentDashboard();
    return;
  }
  
  applySidebarGradient(getSidebarGradient());
  document.getElementById('app-layout').style.display = 'flex';
  
  const classes = getClasses();
  if (classes.length > 0) {
    currentClassId = classes[0].id;
    document.getElementById('brand-title-el').textContent = classes[0].name;
    document.getElementById('brand-sub-el').textContent = classes[0].schoolName || 'Attendance Tracker';
  }
  
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.dataset.page) {
      btn.addEventListener('click', () => navigate(btn.dataset.page));
    }
  });
  
  document.getElementById('logout-btn').addEventListener('click', async () => {
    localStorage.removeItem('current_user');
    currentUser = null;
    location.reload();
  });
  
  navigate('attendance');
}

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
  render();
}

async function render() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="loading-full"><div class="spinner"></div></div>`;
  if (currentPage === 'attendance') await renderAttendance(main);
  else if (currentPage === 'roster') await renderRoster(main);
  else if (currentPage === 'summary') await renderSummary(main);
  else if (currentPage === 'classes') await renderMyClasses(main);
  else if (currentPage === 'chat') await renderChat(main);
  else if (currentPage === 'settings') renderSettings(main);
}

/* ─── Render Functions ──────────────────────────────────────────── */
async function renderAttendance(main) {
  const students = getStudents();
  const attendanceRecords = getAttendance(currentDate);
  const attendanceMap = {};
  attendanceRecords.forEach(r => { attendanceMap[r.studentId] = r; });
  
  const present = attendanceRecords.filter(r => r.status === 'present').length;
  const absent = attendanceRecords.filter(r => r.status === 'absent').length;
  const late = attendanceRecords.filter(r => r.status === 'late').length;
  const recorded = attendanceRecords.length;
  const total = students.length;
  
  const rows = students.length === 0
    ? `<div class="empty-state"><div class="empty-icon">👨‍🎓</div><div class="empty-title">No students yet</div><div class="empty-sub">Add students to start tracking attendance</div></div>`
    : students.map(s => `
      <div class="student-row" data-student-id="${s.id}">
        <div class="student-avatar-small">${getStudentAvatarDisplay(s)}</div>
        <div class="student-info">
          <div class="student-name">${esc(s.name)}</div>
          ${s.grade ? `<div class="student-grade">${esc(s.grade)}</div>` : ''}
        </div>
        <div class="student-controls">
          <div class="status-group">
            <button class="status-btn ${attendanceMap[s.id]?.status === 'present' ? 'active-present' : ''}" data-status="present" data-student-id="${s.id}">✅</button>
            <button class="status-btn ${attendanceMap[s.id]?.status === 'absent' ? 'active-absent' : ''}" data-status="absent" data-student-id="${s.id}">❌</button>
            <button class="status-btn ${attendanceMap[s.id]?.status === 'late' ? 'active-late' : ''}" data-status="late" data-student-id="${s.id}">⏰</button>
          </div>
          <input class="notes-input" type="text" placeholder="Add note..." value="${esc(attendanceMap[s.id]?.notes || '')}" data-student-id="${s.id}">
        </div>
      </div>
    `).join('');
  
  main.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Daily Attendance</div>
        <div class="page-sub">${formatDate(currentDate)}</div>
      </div>
      <div class="date-bar">
        <button class="date-btn" id="prev-day">◀</button>
        <input type="date" id="date-picker" value="${currentDate}" class="date-input">
        <button class="date-btn" id="next-day">▶</button>
        <button class="today-btn" id="today-btn">Today</button>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-label">Total Students</div><div class="stat-value">${total}</div></div>
      <div class="stat-card green"><div class="stat-label">Present</div><div class="stat-value">${present}</div></div>
      <div class="stat-card red"><div class="stat-label">Absent</div><div class="stat-value">${absent}</div></div>
      <div class="stat-card amber"><div class="stat-label">Completion</div><div class="stat-value">${total > 0 ? Math.round(recorded/total*100) : 0}%</div></div>
    </div>
    <div class="card">
      <div class="card-header"><span>Student List</span><span>${recorded} of ${total} recorded</span></div>
      <div class="student-list">${rows}</div>
    </div>
  `;
  
  document.getElementById('prev-day')?.addEventListener('click', () => {
    currentDate = new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() - 1)).toISOString().split('T')[0];
    render();
  });
  document.getElementById('next-day')?.addEventListener('click', () => {
    currentDate = new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() + 1)).toISOString().split('T')[0];
    render();
  });
  document.getElementById('today-btn')?.addEventListener('click', () => {
    currentDate = todayStr();
    render();
  });
  document.getElementById('date-picker')?.addEventListener('change', (e) => {
    currentDate = e.target.value;
    render();
  });
  
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const studentId = parseInt(btn.dataset.studentId);
      const status = btn.dataset.status;
      const row = document.querySelector(`.student-row[data-student-id="${studentId}"]`);
      const notes = row?.querySelector('.notes-input')?.value || '';
      saveAttendance({ studentId, date: currentDate, status, notes });
      toast(`Marked as ${status}`, 'success');
      render();
    });
  });
}

async function renderRoster(main) {
  const students = getStudents();
  main.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Class Roster</div>
        <div class="page-sub">${students.length} students enrolled</div>
      </div>
      <button class="btn btn-primary" id="open-add-modal">➕ Add Student</button>
    </div>
    <div class="card">
      ${students.map(s => `
        <div class="roster-row">
          <div class="student-avatar-small">${getStudentAvatarDisplay(s)}</div>
          <div class="roster-info">
            <div class="roster-name">${esc(s.name)}</div>
            ${s.grade ? `<div class="roster-meta">${esc(s.grade)}</div>` : ''}
            ${s.notes ? `<div class="roster-notes-text">${esc(s.notes)}</div>` : ''}
          </div>
          <div class="roster-actions">
            <button class="btn btn-ghost btn-sm edit-student" data-id="${s.id}" data-name="${esc(s.name)}" data-grade="${esc(s.grade || '')}" data-notes="${esc(s.notes || '')}">✏️ Edit</button>
            <button class="btn btn-danger btn-sm delete-student" data-id="${s.id}">🗑️ Delete</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  // FIXED: Add student button handler
  const addBtn = document.getElementById('open-add-modal');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      console.log("Add button clicked");
      const modal = document.getElementById('modal-add-student');
      if (modal) {
        modal.style.display = 'flex';
        document.getElementById('student-name').focus();
      } else {
        console.error("Modal not found");
        toast("Error: Modal not found", "error");
      }
    });
  }
  
  document.querySelectorAll('.delete-student').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (confirm('Delete this student?')) {
        deleteStudent(parseInt(btn.dataset.id));
        toast('Student deleted', 'success');
        renderRoster(main);
      }
    });
  });
  
  document.querySelectorAll('.edit-student').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      document.getElementById('student-name').value = btn.dataset.name;
      document.getElementById('student-grade').value = btn.dataset.grade;
      document.getElementById('student-notes').value = btn.dataset.notes;
      const modal = document.getElementById('modal-add-student');
      if (modal) modal.style.display = 'flex';
      
      const form = document.getElementById('add-student-form');
      const oldSubmit = form.onsubmit;
      form.onsubmit = async (e) => {
        e.preventDefault();
        updateStudent(id, {
          name: document.getElementById('student-name').value,
          grade: document.getElementById('student-grade').value,
          notes: document.getElementById('student-notes').value
        });
        toast('Student updated', 'success');
        if (modal) modal.style.display = 'none';
        form.onsubmit = oldSubmit;
        renderRoster(main);
      };
    });
  });
}

async function renderSummary(main) {
  const summary = getAttendanceSummary();
  main.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Attendance Summary</div>
        <div class="page-sub">Overall statistics for all students</div>
      </div>
    </div>
    <div class="card">
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:var(--bg);">
            <th style="padding:12px;text-align:left;">Student</th>
            <th style="padding:12px;text-align:center;">Present</th>
            <th style="padding:12px;text-align:center;">Absent</th>
            <th style="padding:12px;text-align:center;">Late</th>
            <th style="padding:12px;text-align:center;">Rate</th>
          </tr>
        </thead>
        <tbody>
          ${summary.map(s => {
            const rate = s.total > 0 ? Math.round((s.present / s.total) * 100) : 0;
            return `
              <tr style="border-bottom:1px solid var(--border);">
                <td style="padding:12px;font-weight:600;">${esc(s.studentName)}</td>
                <td style="padding:12px;text-align:center;"><span class="badge badge-green">${s.present}</span></td>
                <td style="padding:12px;text-align:center;"><span class="badge badge-red">${s.absent}</span></td>
                <td style="padding:12px;text-align:center;"><span class="badge badge-amber">${s.late}</span></td>
                <td style="padding:12px;">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <span style="font-weight:700;color:var(--teal);">${rate}%</span>
                    <div style="flex:1;height:5px;background:var(--border);border-radius:99px;">
                      <div style="width:${rate}%;height:100%;background:var(--teal);border-radius:99px;"></div>
                    </div>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

async function renderMyClasses(main) {
  const classes = getClasses();
  main.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">My Classes</div></div>
      <button class="btn btn-primary" id="new-class-btn">➕ New Class</button>
    </div>
    <div class="classes-list">
      ${classes.map(c => `
        <div class="class-card ${currentClassId === c.id ? 'class-card-active' : ''}">
          <div class="class-card-info">
            <div class="class-card-name">${esc(c.name)}</div>
            <div class="class-card-meta">${c.schoolName || ''} ${c.grade ? `· ${c.grade}` : ''}</div>
            <div class="class-card-meta" style="color:var(--teal);font-family:monospace;">
              Code: ${c.classCode || 'N/A'}
              <button class="btn btn-sm btn-ghost regenerate-code" data-id="${c.id}" style="margin-left:8px;padding:2px 8px;">🔄 Regenerate</button>
            </div>
          </div>
          <div class="class-card-actions">
            <button class="btn btn-sm btn-ghost switch-class" data-id="${c.id}">${currentClassId === c.id ? 'Current' : 'Switch'}</button>
            <button class="btn btn-sm btn-ghost copy-code" data-code="${c.classCode}">📋 Copy Code</button>
            <button class="btn btn-sm btn-danger delete-class" data-id="${c.id}">🗑️</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('new-class-btn')?.addEventListener('click', () => {
    document.getElementById('modal-add-class').style.display = 'flex';
  });
  
  document.querySelectorAll('.switch-class').forEach(btn => {
    btn.addEventListener('click', async () => {
      currentClassId = parseInt(btn.dataset.id);
      localStorage.setItem('current_class_id', currentClassId);
      toast('Class switched', 'success');
      renderMyClasses(main);
    });
  });
  
  document.querySelectorAll('.copy-code').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.code);
      toast('Class code copied!', 'success');
    });
  });
  
  document.querySelectorAll('.regenerate-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const newCode = generateClassCode();
      updateClass(id, { classCode: newCode });
      toast('New class code generated!', 'success');
      renderMyClasses(main);
    });
  });
  
  document.querySelectorAll('.delete-class').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (confirm('Delete this class?')) {
        deleteClass(parseInt(btn.dataset.id));
        if (currentClassId === parseInt(btn.dataset.id)) {
          const classes = getClasses();
          currentClassId = classes.length > 0 ? classes[0].id : null;
        }
        toast('Class deleted', 'success');
        renderMyClasses(main);
      }
    });
  });
}

/* ─── Student Dashboard ─────────────────────────────────────────── */
async function showStudentDashboard() {
  try {
    document.getElementById('app-layout').style.display = 'flex';
    document.querySelectorAll('.nav-item').forEach(b => { if (b) b.style.display = 'none'; });
    
    const studentId = currentUser?.studentId;
    if (!studentId) {
      console.error("No student ID found");
      return;
    }
    
    const students = getStudents();
    const studentInfo = students.find(s => s.id === studentId);
    const allAttendance = JSON.parse(localStorage.getItem('attendance') || '[]');
    const myRecords = allAttendance.filter(a => a.studentId === studentId);
    const classmates = students.filter(s => s.id !== studentId);
    
    if (studentInfo && studentInfo.birthday) {
      checkBirthdays([studentInfo]);
    }
    
    const { earned: achievements, rate, maxStreak, present, total } = calculateAchievements(myRecords);
    const absent = myRecords.filter(r => r.status === 'absent').length;
    const late = myRecords.filter(r => r.status === 'late').length;
    
    let currentStreak = 0;
    const sortedPresent = myRecords.filter(r => r.status === 'present').sort((a, b) => new Date(b.date) - new Date(a.date));
    for (let i = 0; i < sortedPresent.length; i++) {
      if (i === 0) currentStreak = 1;
      else {
        const prevDate = new Date(sortedPresent[i - 1].date);
        const currDate = new Date(sortedPresent[i].date);
        const diffDays = (prevDate - currDate) / (1000 * 60 * 60 * 24);
        if (diffDays === 1) currentStreak++;
        else break;
      }
    }
    
    const main = document.getElementById('main');
    main.innerHTML = `
      ${bannerHTML(currentUser.id || 'student')}
      <div class="student-dash">
        <div class="student-dash-header">
          <div class="student-avatar-large" id="change-avatar-btn" style="cursor:pointer;">
            ${getStudentAvatarDisplay(studentInfo || { id: studentId, name: currentUser.name || 'Student' })}
          </div>
          <div style="flex:1">
            <div class="page-title">Welcome, ${esc(studentInfo?.name || currentUser.name || 'Student')}!</div>
            <div class="page-sub">${studentInfo?.grade ? `${studentInfo.grade}` : ''}</div>
            <button class="btn btn-ghost btn-sm" id="change-name-btn" style="margin-top:8px;">✏️ Change Display Name</button>
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-ghost btn-sm" id="change-banner-btn">🎨 Change Banner</button>
            <button class="btn btn-ghost btn-sm" id="view-classmates-btn">👥 Classmates (${classmates.length})</button>
            <button class="btn btn-ghost" id="student-logout-btn">🚪 Sign Out</button>
          </div>
        </div>
        
        <div class="stat-grid">
          <div class="stat-card green"><div class="stat-label">Present</div><div class="stat-value">${present}</div></div>
          <div class="stat-card red"><div class="stat-label">Absent</div><div class="stat-value">${absent}</div></div>
          <div class="stat-card amber"><div class="stat-label">Late</div><div class="stat-value">${late}</div></div>
          <div class="stat-card"><div class="stat-label">Attendance Rate</div><div class="stat-value" style="color:var(--teal)">${Math.round(rate)}%</div></div>
        </div>
        
        <div class="card streak-card">
          <div style="display:flex;justify-content:space-between;padding:20px;">
            <div><div class="streak-value">${currentStreak}</div><div class="streak-label">Current Streak 🔥</div></div>
            <div><div class="streak-value">${maxStreak}</div><div class="streak-label">Best Streak 🏆</div></div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">🏆 Achievements (${achievements.length}/${ACHIEVEMENTS.length})</div>
          <div class="badges-grid">
            ${ACHIEVEMENTS.map(ach => {
              const earned = achievements.some(e => e.id === ach.id);
              return `<div class="badge-card ${earned ? 'badge-earned' : ''}">
                <div class="badge-icon">${ach.icon}</div>
                <div class="badge-name">${ach.name}</div>
                <div class="badge-description">${ach.description}</div>
              </div>`;
            }).join('')}
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">📅 Attendance History</div>
          <div>
            ${myRecords.length === 0 ? '<div class="empty-state">No records yet</div>' : myRecords.sort((a,b)=>new Date(b.date)-new Date(a.date)).map(r => `
              <div class="student-history-row">
                <div class="student-history-date">${formatDate(r.date)}</div>
                <span class="badge ${r.status === 'present' ? 'badge-green' : r.status === 'absent' ? 'badge-red' : 'badge-amber'}">${r.status}</span>
                ${r.notes ? `<div class="student-history-note">${esc(r.notes)}</div>` : '<div></div>'}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    document.getElementById('student-logout-btn')?.addEventListener('click', async () => {
      localStorage.removeItem('current_user');
      location.reload();
    });
    
    document.getElementById('change-avatar-btn')?.addEventListener('click', () => {
      openProfilePictureModal(studentId, () => showStudentDashboard());
    });
    
    document.getElementById('change-banner-btn')?.addEventListener('click', () => {
      openBannerPicker(currentUser.id, () => showStudentDashboard());
    });
    
    document.getElementById('view-classmates-btn')?.addEventListener('click', () => {
      showClassmatesGallery(classmates);
    });
    
    document.getElementById('change-name-btn')?.addEventListener('click', async () => {
      const newName = prompt('Enter your new display name:', studentInfo?.name || currentUser.name);
      if (newName && newName.trim()) {
        updateUserName(currentUser.username, newName);
        if (studentInfo) {
          updateStudent(studentId, { name: newName });
        }
        currentUser.name = newName;
        localStorage.setItem('current_user', JSON.stringify(currentUser));
        toast('Name updated successfully!', 'success');
        showStudentDashboard();
      }
    });
  } catch (error) {
    console.error("Error loading student dashboard:", error);
    toast("Error loading dashboard. Please refresh.", "error");
  }
}

/* ─── Profile Picture Modal ─────────────────────────────────────── */
function openProfilePictureModal(studentId, onSave) {
  const modal = document.getElementById('modal-profile-picture');
  if (!modal) {
    console.error("Profile picture modal not found");
    toast("Error: Modal not found", "error");
    return;
  }
  
  const grid = document.getElementById('avatars-grid');
  if (!grid) {
    console.error("Avatars grid not found");
    return;
  }
  
  let selectedAvatar = localStorage.getItem(`avatar_${studentId}`) || 'avatar1';
  let selectedFile = null;
  
  grid.innerHTML = STUDENT_AVATARS.map(avatar => `
    <div class="profile-avatar-option ${selectedAvatar === avatar.id ? 'selected' : ''}" data-avatar="${avatar.id}" style="background:${avatar.color};">
      <span style="font-size:32px;">${avatar.emoji}</span>
    </div>
  `).join('');
  
  grid.querySelectorAll('.profile-avatar-option').forEach(opt => {
    opt.addEventListener('click', () => {
      grid.querySelectorAll('.profile-avatar-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedAvatar = opt.dataset.avatar;
      selectedFile = null;
    });
  });
  
  const fileInput = document.getElementById('profile-photo-input');
  const uploadBtn = document.getElementById('upload-photo-btn');
  
  if (uploadBtn) {
    uploadBtn.onclick = () => fileInput.click();
  }
  
  if (fileInput) {
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          selectedFile = ev.target.result;
          toast('Photo loaded! Click Save', 'success');
        };
        reader.readAsDataURL(file);
      }
    };
  }
  
  modal.style.display = 'flex';
  
  const saveHandler = () => {
    if (selectedFile) {
      setStudentProfilePic(studentId, selectedFile);
    } else if (selectedAvatar) {
      setStudentProfilePic(studentId, selectedAvatar);
    }
    toast('Profile picture updated!', 'success');
    modal.style.display = 'none';
    if (onSave) onSave();
  };
  
  const saveBtn = document.getElementById('profile-pic-save');
  const cancelBtn = document.getElementById('profile-pic-cancel');
  const closeBtn = document.getElementById('profile-pic-close');
  
  if (saveBtn) saveBtn.onclick = saveHandler;
  if (cancelBtn) cancelBtn.onclick = () => modal.style.display = 'none';
  if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
}

/* ─── Banner Picker Modal ───────────────────────────────────────── */
function openBannerPicker(uid, onSave) {
  const modal = document.getElementById('modal-banner');
  if (!modal) return;
  
  const stored = getBanner(uid);
  const grid = document.getElementById('banner-modal-grid');
  let selectedBanner = stored || BANNER_PRESETS[0];
  
  grid.innerHTML = BANNER_PRESETS.map(b => `
    <div class="banner-tile ${selectedBanner?.id === b.id ? 'banner-tile-active' : ''}" data-bid="${b.id}" style="background:${b.gradient};">
      <span class="banner-tile-emoji">${b.icon}</span>
      <span class="banner-tile-label">${b.name}</span>
      ${selectedBanner?.id === b.id ? '<span class="banner-tile-check">✓</span>' : ''}
    </div>
  `).join('');
  
  grid.querySelectorAll('.banner-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const bid = tile.dataset.bid;
      selectedBanner = BANNER_PRESETS.find(b => b.id === bid);
      grid.querySelectorAll('.banner-tile').forEach(t => {
        t.classList.remove('banner-tile-active');
        t.querySelector('.banner-tile-check')?.remove();
      });
      tile.classList.add('banner-tile-active');
      const check = document.createElement('span');
      check.className = 'banner-tile-check';
      check.textContent = '✓';
      tile.appendChild(check);
    });
  });
  
  modal.style.display = 'flex';
  
  const saveBtn = document.getElementById('banner-save-btn');
  const closeBtn = document.getElementById('banner-close-btn');
  const closeBtn2 = document.getElementById('banner-close-btn2');
  
  if (saveBtn) saveBtn.onclick = () => {
    setBanner(uid, selectedBanner);
    toast('Banner updated!', 'success');
    modal.style.display = 'none';
    if (onSave) onSave();
  };
  if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
  if (closeBtn2) closeBtn2.onclick = () => modal.style.display = 'none';
}

/* ─── Classmates Gallery ────────────────────────────────────────── */
function showClassmatesGallery(classmates) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal modal-wide">
      <div class="modal-header">
        <h2 class="modal-title">👥 Your Classmates</h2>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      </div>
      <div class="classmates-grid">
        ${classmates.map(c => `
          <div class="classmate-card">
            <div class="classmate-header">
              <div class="student-avatar-small">${getStudentAvatarDisplay(c)}</div>
              <div class="classmate-info">
                <div class="classmate-name">${esc(c.name)}</div>
                <div class="classmate-grade">${c.grade || 'No grade'}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.display = 'flex';
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

/* ─── Chat Functions ────────────────────────────────────────────── */
let currentChatRoom = localStorage.getItem('chat_room_key') || 'default-room';
let chatMessages = JSON.parse(localStorage.getItem(`chat_messages_${currentChatRoom}`) || '[]');

function applyFormatting(command, value = null) {
  document.execCommand(command, false, value);
  document.getElementById('message-input')?.focus();
}

function showColorPicker() {
  const color = prompt('Enter a color (hex, rgb, or name):', '#000000');
  if (color) applyFormatting('foreColor', color);
}

function showFontSize() {
  const size = prompt('Enter font size (1-7):', '3');
  if (size && size >= 1 && size <= 7) applyFormatting('fontSize', size);
}

function insertEmoji(emoji) {
  const input = document.getElementById('message-input');
  if (input) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const text = input.value;
    input.value = text.substring(0, start) + emoji + text.substring(end);
    input.selectionStart = input.selectionEnd = start + emoji.length;
    input.focus();
  }
}

async function renderChat(main) {
  const roomKey = localStorage.getItem('chat_room_key') || 'default-room';
  const displayName = currentUser?.role === 'teacher' ? `👩‍🏫 ${currentUser?.name || currentUser?.username || 'Teacher'}` : `👤 ${currentUser?.name || currentUser?.username || 'Student'}`;
  
  let messages = JSON.parse(localStorage.getItem(`chat_messages_${roomKey}`) || '[]');
  
  main.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">💬 Class Chat</div>
        <div class="page-sub">Room: <strong>${esc(roomKey)}</strong> · Be respectful and have fun!</div>
      </div>
      <button class="btn btn-ghost" id="change-room-btn">🏠 Change Room</button>
    </div>
    
    <div class="chat-container">
      <div class="chat-toolbar">
        <button class="toolbar-btn" onclick="insertEmoji('😀')">😀</button>
        <button class="toolbar-btn" onclick="insertEmoji('😂')">😂</button>
        <button class="toolbar-btn" onclick="insertEmoji('❤️')">❤️</button>
        <button class="toolbar-btn" onclick="insertEmoji('👍')">👍</button>
        <button class="toolbar-btn" onclick="insertEmoji('🎉')">🎉</button>
        <button class="toolbar-btn" onclick="insertEmoji('📚')">📚</button>
        <button class="toolbar-btn" onclick="insertEmoji('🏆')">🏆</button>
        <button class="toolbar-btn" onclick="insertEmoji('😎')">😎</button>
        <button class="toolbar-btn" onclick="insertEmoji('🤔')">🤔</button>
        <button class="toolbar-btn" onclick="insertEmoji('💯')">💯</button>
      </div>
      
      <div class="chat-messages" id="chat-messages">
        ${messages.length === 0 ? '<div class="chat-empty">💬 No messages yet. Be the first to say hello!</div>' : ''}
        ${messages.map(msg => `
          <div class="chat-message ${msg.senderId === currentUser?.id ? 'chat-message-me' : 'chat-message-them'}">
            ${msg.senderId !== currentUser?.id ? `<div class="chat-sender">${esc(msg.senderName)}</div>` : ''}
            <div class="chat-bubble">${msg.text}<div class="chat-time">${new Date(msg.timestamp).toLocaleTimeString()}</div></div>
          </div>
        `).join('')}
      </div>
      
      <div class="chat-input-area">
        <form class="chat-input-form" id="chat-form">
          <input type="text" class="chat-input" id="message-input" placeholder="Type your message here..." autocomplete="off" maxlength="500">
          <button type="submit" class="chat-send-btn">📤 Send</button>
        </form>
      </div>
    </div>
  `;
  
  // Make functions global for inline onclick handlers
  window.applyFormatting = applyFormatting;
  window.showColorPicker = showColorPicker;
  window.showFontSize = showFontSize;
  window.insertEmoji = insertEmoji;
  
  // Auto-scroll to bottom
  const messagesDiv = document.getElementById('chat-messages');
  if (messagesDiv) {
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  
  const chatForm = document.getElementById('chat-form');
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('message-input');
      const text = input.value.trim();
      if (!text) return;
      
      const newMessage = {
        id: Date.now(),
        text: text,
        senderId: currentUser?.id || 'anonymous',
        senderName: displayName,
        timestamp: new Date().toISOString()
      };
      messages.push(newMessage);
      localStorage.setItem(`chat_messages_${roomKey}`, JSON.stringify(messages));
      input.value = '';
      renderChat(main);
    });
  }
  
  document.getElementById('change-room-btn')?.addEventListener('click', () => {
    const newRoom = prompt('Enter room name:', roomKey);
    if (newRoom && newRoom.trim()) {
      localStorage.setItem('chat_room_key', newRoom.trim());
      renderChat(main);
      toast(`Switched to room: ${newRoom}`, 'success');
    }
  });
}

function renderSettings(main) {
  const currentName = currentUser?.name || currentUser?.username || 'User';
  main.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Settings</div>
        <div class="page-sub">Customize your experience</div>
      </div>
    </div>
    <div class="settings-grid">
      <div class="settings-section">
        <div class="settings-section-header">
          <div class="settings-section-icon">👤</div>
          <div><div class="settings-section-title">Profile Settings</div></div>
        </div>
        <div class="form-group">
          <label class="form-label">Display Name</label>
          <input type="text" id="display-name" class="form-input" value="${esc(currentName)}">
        </div>
        <button class="btn btn-primary" id="update-name-btn">Update Name</button>
      </div>
      
      <div class="settings-section">
        <div class="settings-section-header">
          <div class="settings-section-icon">🎨</div>
          <div><div class="settings-section-title">Sidebar Gradient</div></div>
        </div>
        <div class="sidebar-swatches">
          ${SIDEBAR_PRESETS.map(p => `<button class="sidebar-swatch" data-gradient="${p.gradient}" style="background:${p.gradient};width:80px;height:50px;border-radius:8px;cursor:pointer;"></button>`).join('')}
        </div>
      </div>
      
      <div class="settings-section">
        <div class="settings-section-header">
          <div class="settings-section-icon">💬</div>
          <div><div class="settings-section-title">Chat Room</div></div>
        </div>
        <input type="text" id="chat-room-input" class="form-input" value="${localStorage.getItem('chat_room_key') || 'default-room'}" style="margin-bottom:12px;">
        <button class="btn btn-primary" id="save-room-btn">Save Room Key</button>
      </div>
    </div>
  `;
  
  document.getElementById('update-name-btn')?.addEventListener('click', async () => {
    const newName = document.getElementById('display-name').value.trim();
    if (newName) {
      updateUserName(currentUser.username, newName);
      currentUser.name = newName;
      localStorage.setItem('current_user', JSON.stringify(currentUser));
      toast('Name updated!', 'success');
    }
  });
  
  document.querySelectorAll('.sidebar-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      applySidebarGradient(btn.dataset.gradient);
      toast('Sidebar updated!', 'success');
    });
  });
  
  document.getElementById('save-room-btn')?.addEventListener('click', () => {
    const roomKey = document.getElementById('chat-room-input').value.trim();
    if (roomKey) {
      localStorage.setItem('chat_room_key', roomKey);
      toast('Chat room saved!', 'success');
    }
  });
}

/* ─── Initialize App ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  applySidebarGradient(getSidebarGradient());
  
  // FIXED: Add student form handler - This was the issue!
  const addStudentForm = document.getElementById('add-student-form');
  if (addStudentForm) {
    addStudentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('student-name').value.trim();
      const grade = document.getElementById('student-grade').value.trim();
      const notes = document.getElementById('student-notes').value.trim();
      
      if (!name) {
        toast('Please enter a student name', 'error');
        return;
      }
      
      addStudent({ name, grade, notes, classId: currentClassId });
      toast('Student added successfully!', 'success');
      
      // Reset form and close modal
      document.getElementById('student-name').value = '';
      document.getElementById('student-grade').value = '';
      document.getElementById('student-notes').value = '';
      document.getElementById('modal-add-student').style.display = 'none';
      
      // Refresh the roster page if we're on it
      if (currentPage === 'roster') {
        render();
      }
    });
  } else {
    console.error("Add student form not found!");
  }
  
  // Add class form handler
  const addClassForm = document.getElementById('add-class-form');
  if (addClassForm) {
    addClassForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-class-name').value.trim();
      const schoolName = document.getElementById('new-class-school').value.trim();
      const grade = document.getElementById('new-class-grade').value.trim();
      
      if (!name) {
        toast('Please enter a class name', 'error');
        return;
      }
      
      addClass({ name, schoolName, grade });
      toast('Class created! Class code generated.', 'success');
      
      document.getElementById('new-class-name').value = '';
      document.getElementById('new-class-school').value = '';
      document.getElementById('new-class-grade').value = '';
      document.getElementById('modal-add-class').style.display = 'none';
      
      if (currentPage === 'classes') {
        render();
      }
    });
  }
  
  const savedUser = localStorage.getItem('current_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    launchApp();
  } else {
    showLoginScreen();
  }
});

// Make functions global for inline event handlers
window.closeAddModal = function() {
  document.getElementById('modal-add-student').style.display = 'none';
};

window.closeClassModal = function() {
  document.getElementById('modal-add-class').style.display = 'none';
};
