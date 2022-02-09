const { Scale } = require('../models');

const scaleData = [
  {
    scale_name: 'C Ionian',
    notes: 'C,D,E,F,G,A,B',
    chords: 'C,Dm,Em,F,G,Am,Bdim',
    tonic: 'C'
  },
  {
    scale_name: 'G Ionian',
    notes: 'G,A,B,C,D,E,F',
    chords: 'G,Am,Bm,C,D,Em,Fdim,',
    tonic: 'G'
  },
  {
    scale_name: 'D Lydian',
    notes: 'D,E,F#,G#,A,B,C#',
    chords: 'D,E,F#m,G#dim,A,Bm,C#m',
    tonic: 'D'
  },
  {
    scale_name: 'A Lydian',
    notes: 'A,B,C#,D#,E,F#,G#',
    chords: 'A,B,C#m,D#dim,E,F#m,G#m',
    tonic: 'A'
  },
  {
    scale_name: 'E mixolydian',
    notes: 'E,F#,G#,A,B,C#,D',
    chords: 'E,F#m,G#dim,A,Bm,C#m,D',
    tonic: 'E'
  },
  {
    scale_name: 'B mixolydian',
    notes: 'B,C#,D#,E,F#,G#,A',
    chords: 'B,C#m,D#dim,E,F#m,G#m,A',
    tonic: 'B'
  },
  {
    scale_name: 'F# mixoydian',
    notes: 'F#,G#,A#,B,C#,D#,E',
    chords: 'F#,G#m,A#dim,B,C#m,D#m,E',
    tonic: 'F#'
  },
  {
    scale_name: 'C# mixoydian',
    notes: 'C#,D#,E#,F#,G#,A#,B',
    chords: 'C#,D#m,E#dim,F#,G#m,A#m,B',
    tonic: 'C#'
  },
  {
    scale_name: 'F Ionian',
    notes: 'F,G,A,Bb,C,D,E',
    chords: 'F,Gm,Am,Bb,C,Dm,Edim',
    tonic: 'F'
  },
  {
    scale_name: 'Bb Ionian',
    notes: 'Bb,C,D,Eb,F,G,A',
    chords: 'Bb,Cm,Dm,Eb,F,Gm,Adim',
    tonic: 'Bb'
  },
  {
    scale_name: 'Eb Lydian',
    notes: 'Eb,F,G,A,Bb,C,D',
    chords: 'Eb,F,Gm,Adim,Bb,Cm,Dm',
    tonic: 'Eb'
  },
  {
    scale_name: 'Ab Lydian',
    notes: 'Ab,Bb,C,D,Eb,F,G',
    chords: 'Ab,Bb,Cm,Ddim,Eb,Fm,Gm',
    tonic: 'Ab'
  },
  {
    scale_name: 'Db Lydian',
    notes: 'Db,Eb,F,G,Ab,Bb,C',
    chords: 'Db,Eb,Fm,Gdim,Ab,Bbm,Cm',
    tonic: 'Db'
  },
  {
    scale_name: 'Gb Lydian',
    notes: 'Gb,Ab,Bb,C,Db,Eb,F',
    chords: 'Gb,Ab,Bbm,Cdim,Db,Ebm,Fm',
    tonic: 'Gb'
  },
  {
    scale_name: 'Cb Major',
    notes: 'Cb,Db,Eb,Fb,Gb,Ab,Bb',
    chords: 'Cb,Dbm,Ebm,Fb,Gb,Abm,Bbdim',
    tonic: 'Cb'
  },
  {
    scale_name: 'A Minor',
    notes: 'A,B,C,D,E,F,G',
    chords: 'Am,Bdim,C,Dm,Em,F,G',
    tonic: 'A'
  },
  {
    scale_name: 'E Phrygian',
    notes: 'E,F,G,A,B,C,D',
    chords: 'Em,F,G,Am,Bdim,C,Dm',
    tonic: 'E'
  },
  {
    scale_name: 'B Phrygian',
    notes: 'B,C,D,E,F#,G,A',
    chords: 'Bm,C,D,Em,F#dim,G,Am',
    tonic: 'B'
  },
  {
    scale_name: 'F# Minor',
    notes: 'F#m,G#dim,A,Bm,C#m,D,E',
    chords: 'F#,G#,A,B,C#,D,E',
    tonic: 'F#'
  },
  {
    scale_name: 'C# Minor',
    notes: 'C#,D#,E,F#,G#,A,B',
    chords: 'C#m,D#dim,E,F#m,G#m,A,B',
    tonic: 'C#'
  },
  {
    scale_name: 'G# Minor',
    notes: 'G#,A#,B,C#,D#,E,F#',
    chords: 'G#m,A#dim,B,C#m,D#m,E,F#',
    tonic: 'G#'
  },
  {
    scale_name: 'D# Minor',
    notes: 'D#,E#,F#,G#,A#,B,C#',
    chords: 'D#m,E#dim,F#,G#m,A#m,B,C#',
    tonic: 'D#'
  },
  {
    scale_name: 'A# Minor',
    notes: 'A#,B,C#,D#,E#,F#,G#',
    chords: 'A#m,Bdim,C#,D#m,E#m,F#,G#',
    tonic: 'A#'
  },
  {
    scale_name: 'D Dorian',
    notes: 'D,E,F,G,A,B,C',
    chords: 'Dm,Em,F,G,Am,Bdim,C',
    tonic: 'D'
  },
  {
    scale_name: 'G Dorian',
    notes: 'G,A,Bb,C,D,E,F',
    chords: 'Gm,Am,Bb,C,Dm,Edim,F',
    tonic: 'G'
  },
  {
    scale_name: 'C Harmonic Minor',
    notes: 'C,D,Eb,F,G,Ab,B',
    chords: 'Cm,Ddim,Ebaug,Fm,G,Ab,Bdim',
    tonic: 'C'
  },
  {
    scale_name: 'F Harmonic Minor',
    notes: 'F,G,Ab,Bb,C,Db,E',
    chords: 'Fm,Gdim,Abaug,Bm,C,Db,Edim',
    tonic: 'F'
  }, 
  {
    scale_name: 'Bb Minor',
    notes: 'Bb,C,Db,Eb,F,Gb,Ab',
    chords: 'Bbm,Cdim,Db,Ebm,Fm,Gb,Ab',
    tonic: 'Bb'
  },
  {
    scale_name: 'Eb Minor',
    notes: 'Eb,F,Gb,Ab,Bb,Cb,Db',
    chords: 'Ebm,Fdim,Gb,Abm,Bbm,Cb,Db',
    tonic: 'Eb'
  },
  {
    scale_name: 'Ab Minor',
    notes: 'Ab,Bb,Cb,Db,Eb,Fb,Gb',
    chords: 'Abm,Bbdim,Cb,Dbm,Ebm,Fb,Gb',
    tonic: 'Ab'
  }
];

const seedScales = () => Scale.bulkCreate(scaleData);

module.exports = seedScales;