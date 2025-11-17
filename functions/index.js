import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import admin from 'firebase-admin'

admin.initializeApp()

const app = express()
app.use(cors({ origin: true }))
app.use(express.json())

// Store interest submissions
app.post('/api/interest', async (req, res) => {
  try {
    const { name, email, organization, interest } = req.body
    
    const submission = {
      name,
      email,
      organization,
      interest,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: 'new'
    }

    // Store in Firestore
    const docRef = await admin.firestore().collection('interestSubmissions').add(submission)
    
    res.json({ 
      success: true, 
      id: docRef.id,
      message: 'Thank you for your interest! We will contact you soon.'
    })
  } catch (error) {
    console.error('Error storing interest:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit interest' 
    })
  }
})

// Get interest submissions (protected)
app.get('/api/interest', async (req, res) => {
  try {
    // Add authentication here
    const snapshot = await admin.firestore()
      .collection('interestSubmissions')
      .orderBy('timestamp', 'desc')
      .get()
    
    const submissions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    res.json(submissions)
  } catch (error) {
    console.error('Error fetching submissions:', error)
    res.status(500).json({ error: 'Failed to fetch submissions' })
  }
})

export const api = functions.https.onRequest(app)
