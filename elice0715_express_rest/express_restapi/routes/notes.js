const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

// 메모 목록 구현하기 
router.get('/', (req, res, next) => {
  const notes = Note.list();
  res.json(notes);
})

// 메모 상세 구현하기
router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const note = Note.get(id);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

// 메모 작성 구현하기
router.post('/', (req, res, next) => {
  console.log(req);
  const { title, content } = req.body;
  const note = Note.create(title, content);
  res.json(note); 
});

// 메모 수정 구현하기
router.put(':/id', (req, res, next) => {
  const id = Nubmer(req.params.id);
  const { title, content } = req.body;

  try {
    const note = Note.update(id, title, content);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

// 메모 삭제 구현하기
router.delete('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  console.log("delete hi")
  try {
    Note.delete(id);
    res.json({ result: 'success' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;