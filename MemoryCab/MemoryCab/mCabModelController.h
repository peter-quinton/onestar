//
//  mCabModelController.h
//  MemoryCab
//
//  Created by Quinton, Peter on 8/18/13.
//  Copyright (c) 2013 OneStar. All rights reserved.
//

#import <UIKit/UIKit.h>

@class mCabDataViewController;

@interface mCabModelController : NSObject <UIPageViewControllerDataSource>

- (mCabDataViewController *)viewControllerAtIndex:(NSUInteger)index storyboard:(UIStoryboard *)storyboard;
- (NSUInteger)indexOfViewController:(mCabDataViewController *)viewController;

@end
