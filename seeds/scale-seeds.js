const { Scale } = require('../models');

const scaleData = [
  {
    scale_name: 'C Ionian',
    notes: 'C,D,E,F,G,A,B',
    chords: 'C,Dm,Em,F,G,Am,Bdim',
    key_id: '1'
  },
  {
    scale_name: 'G Ionian',
    notes: 'G,A,B,C,D,E,F',
    chords: 'G,Am,Bm,C,D,Em,Fdim,',
    key_id: '2'
  },
  {
    scale_name: 'D Lydian',
    notes: 'D,E,F#,G#,A,B,C#',
    chords: 'D,E,F#m,G#dim,A,Bm,C#m',
    key_id: '3'
  },
  {
    scale_name: 'A Lydian',
    notes: 'A,B,C#,D#,E,F#,G#',
    chords: 'A,B,C#m,D#dim,E,F#m,G#m',
    key_id: '4'
  },
  {
    scale_name: 'E mixolydian',
    notes: 'E,F#,G#,A,B,C#,D',
    chords: 'E,F#m,G#dim,A,Bm,C#m,D',
    key_id: '5'
  },
  {
    scale_name: 'B mixolydian',
    notes: 'B,C#,D#,E,F#,G#,A',
    chords: 'B,C#m,D#dim,E,F#m,G#m,A',
    key_id: '6'
  },
  {
    scale_name: 'F# mixoydian',
    notes: 'F#,G#,A#,B,C#,D#,E',
    chords: 'F#,G#m,A#dim,B,C#m,D#m,E',
    key_id: '7'
  },
  {
    scale_name: 'C# mixoydian',
    notes: 'C#,D#,E#,F#,G#,A#,B',
    chords: 'C#,D#m,E#dim,F#,G#m,A#m,B',
    key_id: '8'
  },
  {
    scale_name: 'F Ionian',
    notes: 'F,G,A,Bb,C,D,E',
    chords: 'F,Gm,Am,Bb,C,Dm,Edim',
    key_id: '9'
  },
  {
    scale_name: 'Bb Ionian',
    notes: 'Bb,C,D,Eb,F,G,A',
    chords: 'Bb,Cm,Dm,Eb,F,Gm,Adim',
    key_id: '10'
  },
  {
    scale_name: 'Eb Lydian',
    notes: 'Eb,F,G,A,Bb,C,D',
    chords: 'Eb,F,Gm,Adim,Bb,Cm,Dm',
    key_id: '11'
  },
  {
    scale_name: 'Ab Lydian',
    notes: 'Ab,Bb,C,D,Eb,F,G',
    chords: 'Ab,Bb,Cm,Ddim,Eb,Fm,Gm',
    key_id: '12'
  },
  {
    scale_name: 'Db Lydian',
    notes: 'Db,Eb,F,G,Ab,Bb,C',
    chords: 'Db,Eb,Fm,Gdim,Ab,Bbm,Cm',
    key_id: '13'
  },
  {
    scale_name: 'Gb Lydian',
    notes: 'Gb,Ab,Bb,C,Db,Eb,F',
    chords: 'Gb,Ab,Bbm,Cdim,Db,Ebm,Fm',
    key_id: '14'
  },
  {
    scale_name: 'Cb Major',
    notes: 'Cb,Db,Eb,Fb,Gb,Ab,Bb',
    chords: 'Cb,Dbm,Ebm,Fb,Gb,Abm,Bbdim',
    key_id: '15'
  },
  {
    scale_name: 'A Minor',
    notes: 'A,B,C,D,E,F,G',
    chords: 'Am,Bdim,C,Dm,Em,F,G',
    key_id: '16'
  },
  {
    scale_name: 'E Phrygian',
    notes: 'E,F,G,A,B,C,D',
    chords: 'Em,F,G,Am,Bdim,C,Dm',
    key_id: '17'
  },
  {
    scale_name: 'B Phrygian',
    notes: 'B,C,D,E,F#,G,A',
    chords: 'Bm,C,D,Em,F#dim,G,Am',
    key_id: '18'
  },
  {
    scale_name: 'F# Minor',
    notes: 'F#m,G#dim,A,Bm,C#m,D,E',
    chords: 'F#,G#,A,B,C#,D,E',
    key_id: '19'
  },
  {
    scale_name: 'C# Minor',
    notes: 'C#,D#,E,F#,G#,A,B',
    chords: 'C#m,D#dim,E,F#m,G#m,A,B',
    key_id: '20'
  },
  {
    scale_name: 'G# Minor',
    notes: 'G#,A#,B,C#,D#,E,F#',
    chords: 'G#m,A#dim,B,C#m,D#m,E,F#',
    key_id: '21'
  },
  {
    scale_name: 'D# Minor',
    notes: 'D#,E#,F#,G#,A#,B,C#',
    chords: 'D#m,E#dim,F#,G#m,A#m,B,C#',
    key_id: '22'
  },
  {
    scale_name: 'A# Minor',
    notes: 'A#,B,C#,D#,E#,F#,G#',
    chords: 'A#m,Bdim,C#,D#m,E#m,F#,G#',
    key_id: '23'
  },
  {
    scale_name: 'D Dorian',
    notes: 'D,E,F,G,A,B,C',
    chords: 'Dm,Em,F,G,Am,Bdim,C',
    key_id: '24'
  },
  {
    scale_name: 'G Dorian',
    notes: 'G,A,Bb,C,D,E,F',
    chords: 'Gm,Am,Bb,C,Dm,Edim,F',
    key_id: '25'
  },
  {
    scale_name: 'C Harmonic Minor',
    notes: 'C,D,Eb,F,G,Ab,B',
    chords: 'Cm,Ddim,Ebaug,Fm,G,Ab,Bdim',
    key_id: '26'
  },
  {
    scale_name: 'F Harmonic Minor',
    notes: 'F,G,Ab,Bb,C,Db,E',
    chords: 'Fm,Gdim,Abaug,Bm,C,Db,Edim',
    key_id: '27'
  }, 
  {
    scale_name: 'Bb Minor',
    notes: 'Bb,C,Db,Eb,F,Gb,Ab',
    chords: 'Bbm,Cdim,Db,Ebm,Fm,Gb,Ab',
    key_id: '28'
  },
  {
    scale_name: 'Eb Minor',
    notes: 'Eb,F,Gb,Ab,Bb,Cb,Db',
    chords: 'Ebm,Fdim,Gb,Abm,Bbm,Cb,Db',
    key_id: '29'
  },
  {
    scale_name: 'Ab Minor',
    notes: 'Ab,Bb,Cb,Db,Eb,Fb,Gb',
    chords: 'Abm,Bbdim,Cb,Dbm,Ebm,Fb,Gb',
    key_id: '30'
  }
];

const seedScales = () => Scale.bulkCreate(scaleData);

module.exports = seedScales;