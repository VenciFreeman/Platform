#include <iostream>
#include <iomanip>
#include <cmath>
#include <string>
#include <fstream>
using namespace std;

 int *foo(int *x , int *y) {
    int *z = y;
    y = x;
    cout << *z << " " << *y << endl;
    if (*z < *y)
        return y;
    
    return z;
    
}
         int bar(int *y, int *x) {
             int c;
             
             c = *x - *y;

             y=foo(&c, x);
             
             cout << c << " " << *y << endl;
             return *y;
         }
         int main() {
             
             int a=1, b= 10, c;
             
             foo (&a, &b) ;
             
             c =bar(&b, &a) ;
             
             cout << c << endl;
             
             return 0;
             
         }

/*int main() {
    
    int a=1, b= 10, *c, *d, *e;
    d=&a;
    c=d;
    e=&b;
    d=&b;
    a=11;
    
    
    cout << *c << endl;
    
    return 0;
    
 }*/
/*int ll(int*p,int*q,int*r){
    int x=7;
    if(*r>=*p){
        cout<<*p<<" "<<*q<<" "<<*r<<endl;
    }
    if(*p==*q){
        x=(*p)++;
        return x+*r;
    }
    if(*p<*q){
        *q=7-*p;
        x+=*p+*q;
    }
    x=*p-x;
    return x;
}


int main (){
    int a=1,b=5,c=2;
    a=ll(&a, &a, &a);
    c+=ll(&a, &b, &c);
    cout<<a<<" "<<b<<" "<<c<<endl;
}
int main(){
bool sheLovesMe = true;
for (int i = 0; i <= 9; i++)
sheLovesMe = !sheLovesMe;
if (sheLovesMe)
cout <<"She loves me!" <<endl;
else
    cout <<"She loves me not!" <<endl;
}
int kthMin(const int array[], int k){
    int i, j, y, tmp,tmp2,tmp3;
    for (i = 0; i < k-1; i++) {
        y = i;
        for (j = i + 1; j < k; j++)
            if (array[j] < array[y])
                y = j;
        tmp = array[i];
        tmp2 = array[y];
        tmp3 =array[i];
        tmp= tmp2;
        tmp2=tmp3;
    }
    return tmp;
}
int main(){
    const int x[]={23,5,45,214,78,356};
    cout<<kthMin(x, 4);
    
}*/
/*string uplowcase(string s){
    char ch;
    for (int i=0; i<s.length()-1; i++) {
        ch=s.at(i);
        if (s[i]==isupper(ch)&&(s[i]>=65&&s[i]<=90)) {
            ch=tolower(ch);
        };
        if (s[i]==islower(ch)&&(s[i]>=97&&s[i]<=122)) {
            ch=toupper(ch);
        };
    }
}

int main(){
    int i, x = 10, y = 12;
    
    for (i = 1 ; i <= 3 ; i++) {
        
        if (i + x + y < i * x + y)
            
            if (x / y * i >= x - y -i)
                cout<< "A";
        
            else
                cout<< "B" ;
                
                cout<< "C";


    }}
 
*/
/*int addOneToDigit (int x, int i) {
    int ten = 1;
    int x_ret=0;
    
    for (int j = 0; j < i; j++){
        
        if(i>1&&j>=1)
            ten *= 10;
         else
             ten=1;
    }
    if ((x / ten) % 10 == 9)
        x_ret = x_ret - 8*ten;
    else
        x_ret=x+ten;
    return x_ret;
}
int addOneToNum (int x) {
    int x_ret = 0;

    
    
    
    addOneToDigit(x, 1);

    return x_ret;

}


int main(){
   
    cout<<addOneToNum(343);
    
    
}
*/

int main(){
    for(int n=0;n<5;n++){
        for(int i=0;i<9;i++){
            if(i+n<4||i-n>4)
                cout<<" ";
            else
                cout <<"*";
        }
                cout<<endl;
    }
    
}
