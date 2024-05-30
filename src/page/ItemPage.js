import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import '../css/ItemPage.css'; // 별도의 CSS 파일을 사용합니다
import PurchaseButtons from '../component/item/PurchaseButtons';
const ItemPage = () => {
    const { Detail } = useSelector(state => ({
        Detail: state.sotreRedux.Detail
    }));

    return (
        <>
            <Header />
            {Detail ? (
                <div className="body">
                    <div className="product-detail">
                        <img className="product-image" src={Detail[0].imge} alt={Detail[0].content} />
                        <div className="product-info">
                            <h3 className="product-title">{Detail[0].type}</h3>
                            <table className="product-table">
                                <tbody>
                                    <tr>
                                        <td className="label">정가</td>
                                        <td style={{color:"red"}}>{Detail[0].price}원</td>
                                    </tr>
                                    <tr>
                                        <td className="label">판매가</td>
                                        <td style={{color:"red"}}>{Detail[0].discounted_price}원 (10% 할인)</td>
                                    </tr>
                                    <tr>
                                        <td className="label">포인트 적립</td>
                                        <td style={{color:"red"}}>1000P (10% 적립)</td>
                                    </tr>
                                    <tr>
                                        <td className="label">포인트 추가적립</td>
                                        <td>만원 이상 구매 시 1,000P, 5만원 이상 구매 시 2,000P 추가적립, 편의점 배송 이용 시 300P 추가적립</td>
                                    </tr>
                                    <tr>
                                        <td className="label">배송료</td>
                                        <td>무료</td>
                                    </tr>
                                    <tr>
                                        <td className="label">배송안내</td>
                                        <td>[당일배송] 당일배송 서비스 시작! [휴일배송] 휴일에도 배송</td>
                                    </tr>
                                    <tr>
                                        <td className="label">도착예정일</td>
                                        <td>지금 주문 시 내일 도착 예정</td>
                                    </tr>
                                    <tr>
                                        <td className="label">수량</td>
                                        <td>
                                            <select name="quantity" className="quantity-select">
                                                {[...Array(10).keys()].map(num => (
                                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <PurchaseButtons/>
                </div>
            ) : (
                <div>상품 준비 중...</div>
            )}
        </>
    );
};

export default ItemPage;
