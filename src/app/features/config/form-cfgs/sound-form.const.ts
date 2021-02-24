/* eslint-disable max-len */
import { ConfigFormSection, SoundConfig } from '../global-config.model';
import { T } from '../../../t.const';
import { playDoneSound } from '../../tasks/util/play-done-sound';

export const SOUND_FORM_CFG: ConfigFormSection<SoundConfig> = {
  title: T.GCF.SOUND.TITLE,
  key: 'sound',
  items: [
    {
      key: 'volume',
      type: 'slider',
      templateOptions: {
        type: 'number',
        min: 0,
        max: 100,
        label: T.GCF.SOUND.VOLUME,
        required: true,
      },
    },
    {
      key: 'isPlayDoneSound',
      type: 'checkbox',
      templateOptions: {
        label: T.GCF.SOUND.IS_PLAY_DONE_SOUND,
      },
    },
    {
      key: 'doneSound',
      type: 'select',
      templateOptions: {
        label: T.GCF.SOUND.DONE_SOUND,
        options: [
          {label: 'Sound 1', value: 'done1.mp3'},
          {label: 'Sound 2', value: 'done2.mp3'},
          {label: 'Sound 3', value: 'done3.mp3'},
          {label: 'Sound 4', value: 'done4.mp3'},
          {label: 'Sound 5', value: 'done5.mp3'},
          {label: 'Sound 6', value: 'done6.mp3'},
          {label: 'Sound 7', value: 'done7.mp3'},
        ],
        hideExpression: ((model: any) => {
          return !model.isPlayDoneSound;
        }),
        change: ({model}) => playDoneSound(model),
      },
    },
    {
      key: 'isIncreaseDoneSoundPitch',
      type: 'checkbox',
      templateOptions: {
        label: T.GCF.SOUND.IS_INCREASE_DONE_PITCH,
      },
      hideExpression: ((model: any) => {
        return !model.isPlayDoneSound;
      }),
    },
  ]
};
