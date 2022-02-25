#include <conio.h>
#include <stdio.h>

void main()
{
    float total;
    float mark,credit;
    clrscr();
    for(int i=0;i<13;i++)
    {
        printf("Enter the Credit \t");
        scanf("%d",&credit);
        printf("Enter the marks \t");
        scanf("%d",&mark);
        total+=credit*mark;

    }
    total=total/38;
    printf("Total CGPA: %d",total);
    
}