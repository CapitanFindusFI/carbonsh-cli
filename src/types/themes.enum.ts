type Theme = 
    '3024 Night' |
    'A11y Dark' |
    'Blackboard' |
    'Base 16 (Dark)' |
    'Base 16 (Light)' |
    'Cobalt' |
    'Dracula' |
    'Duotone' |
    'Hopscotch' |
    'Lucario' |
    'Material' |
    'Monokai' |
    'Night Owl' |
    'Nord' |
    'Oceanic Next' |
    'One Light' |
    'One Dark' |
    'Panda' |
    'Paraiso' |
    'Seti' |
    'Shades of Purple' |
    'Solarized (Dark)' |
    'Solarized (Light)' |
    'SynthWave \'84' |
    'Twilight' |
    'Verminal' |
    'VSCode' |
    'Yeti' |
    'Zenburn' ;

const ThemeValues: Map<Theme, string> = new Map<Theme, string>();
ThemeValues.set('3024 Night', '3024-night');
ThemeValues.set('A11y Dark', 'a11y-dark');
ThemeValues.set('Blackboard', 'blackboard');
ThemeValues.set('Base 16 (Dark)', 'base16-dark');
ThemeValues.set('Base 16 (Light)', 'base16-light');
ThemeValues.set('Cobalt', 'cobalt');
ThemeValues.set('Dracula', 'dracula');
ThemeValues.set('Duotone', 'duotone');
ThemeValues.set('Hopscotch', 'hopscotch');
ThemeValues.set('Lucario', 'lucario');
ThemeValues.set('Material', 'material');
ThemeValues.set('Monokai', 'monokai');
ThemeValues.set('Night Owl', 'night-owl');
ThemeValues.set('Nord', 'nord');
ThemeValues.set('Oceanic Next', 'oceanic-next');
ThemeValues.set('One Light', 'one-light');
ThemeValues.set('One Dark', 'one-dark');
ThemeValues.set('Panda', 'panda');
ThemeValues.set('Paraiso', 'paraiso');
ThemeValues.set('Shades of Purple', 'shades-of-purple');
ThemeValues.set('Solarized (Dark)', 'solarized-dark');
ThemeValues.set('Solarized (Light)', 'solarized-light');
ThemeValues.set('SynthWave \'84', 'synthwave-84');
ThemeValues.set('Twilight', 'twilight');
ThemeValues.set('Verminal', 'verminal');
ThemeValues.set('VSCode', 'vscode');
ThemeValues.set('Yeti', 'yeti');
ThemeValues.set('Zenburn', 'zenburn');

const ThemesList: ReadonlyArray<string> = Array.from(ThemeValues.values());

const DefaultTheme: string = ThemeValues.get("Seti");

export {
    Theme,
    ThemeValues,
    ThemesList,
    DefaultTheme
}