//
//  mCabDataViewController.m
//  MemoryCab
//
//  Created by Quinton, Peter on 8/18/13.
//  Copyright (c) 2013 OneStar. All rights reserved.
//

#import "mCabDataViewController.h"

@interface mCabDataViewController ()

@end

@implementation mCabDataViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    self.dataLabel.text = [self.dataObject description];
}

@end
