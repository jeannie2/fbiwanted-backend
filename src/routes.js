import { Router } from 'express'
import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// WELCOME
router.get('/', (await import('./controllers/welcome.js')).default)

// API | My Profile
router.get('/api/my/profile', authenticateUser, (await import('./controllers/api/my/profile/show.js')).default)

// API | Auth
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)

// API | Tips
router.post('/api/tips', (await import('./controllers/api/tips/create.js')).default)
router.get('/api/admin/tips', authenticateUser, (await import('./controllers/api/admin/tips/index.js')).default)
router.get('/api/admin/tips/:tipId', authenticateUser, (await import('./controllers/api/admin/tips/show.js')).default)

export default router
