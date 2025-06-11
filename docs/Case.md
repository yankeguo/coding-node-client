# Case

测试用例

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | 附件列表（非用例详情时本值为null） | [optional] [default to undefined]
**CreatedAt** | **string** | 创建时间 | [optional] [default to '']
**CreatedBy** | **number** | 创建人ID | [optional] [default to undefined]
**CustomSteps** | [**Array&lt;CustomStep&gt;**](CustomStep.md) | 自定义步骤 | [optional] [default to undefined]
**Expected** | **string** | 预期结果 （适用于文本用例） | [optional] [default to '']
**Id** | **number** | ID 主键 | [optional] [default to undefined]
**Preconds** | **string** | 前置步骤 | [optional] [default to '']
**Priority** | **number** | 优先级 | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID | [optional] [default to undefined]
**Sort** | **number** | 排序值 | [optional] [default to undefined]
**Steps** | **string** | 文本描述（适用于文本用例） | [optional] [default to '']
**TemplateType** | **string** | 用例类型，可选值：STEPS，TEXT | [optional] [default to '']
**Title** | **string** | 标题 | [optional] [default to '']
**UpdatedAt** | **string** | 更新时间 | [optional] [default to '']

## Example

```typescript
import { Case } from './api';

const instance: Case = {
    Attachments,
    CreatedAt,
    CreatedBy,
    CustomSteps,
    Expected,
    Id,
    Preconds,
    Priority,
    SectionId,
    Sort,
    Steps,
    TemplateType,
    Title,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
