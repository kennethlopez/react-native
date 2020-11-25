import {Dimensions, PixelRatio, StyleSheetProperties} from 'react-native';
import { } from "react-native";

const guidelineBaseWidth = 375;

export const WINDOW_WIDTH = Dimensions.get('window').width;

export const scaleSize = (size: number) => (WINDOW_WIDTH/guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(top: number, right: number = top, bottom: number = top, left: number = right, property: string) {
    let styles: any = {};

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

export function margin(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(offset = {height:2,width:2}, radius = 8, opacity = 0.2) {
    return {
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}