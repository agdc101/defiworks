<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Form\Extension\Core\Type\TextType;


class UpdateUserDetailsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('email', EmailType::class, [
            'constraints' => [
                new Length([
                    'min' => 10,
                    'minMessage' => 'Your email should be at least {{ limit }} characters',
                    // max length allowed by Symfony for security reasons
                    'max' => 450,
                ])
            ],
            'attr' => [
                'class' => 'form-control',
            ]
        ])
            ->add('address', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Your address should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 450,
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('city', TextType::class, [
                'constraints' => [
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Your city should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 100,
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('postCode', TextType::class,  [
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Your Post Code should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 10,
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
            ->add('county',TextType::class, [
                'required' => false,
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Your county should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 250,
                    ]),
                    new Regex([
                        'match' => false,
                        'pattern' => '~[0-9]~',
                        'message' => 'The county you have entered is not valid'
                    ])
                ],
                'attr' => [
                    'class' => 'form-control',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
