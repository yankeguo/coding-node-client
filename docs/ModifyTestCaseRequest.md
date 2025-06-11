# ModifyTestCaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachmentIds** | **Array&lt;number&gt;** | 附件 ID 数组：来自“生成附件预上传信息”接口 | [optional] [default to undefined]
**CaseId** | **number** | 用例 ID | [default to undefined]
**CustomSteps** | [**Array&lt;CustomStep&gt;**](CustomStep.md) | 自定义步骤（步骤用例必填） | [optional] [default to undefined]
**Expected** | **string** | 预期结果（适用于文本用例） | [optional] [default to undefined]
**Preconds** | **string** | 前置步骤 | [optional] [default to undefined]
**Priority** | **number** | 优先级，默认2（中），可选值：0（紧急）,1（高）,2（中）,3（低） | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**SectionId** | **number** | 分组ID | [default to undefined]
**Steps** | **string** | 文本描述（适用于文本用例） | [optional] [default to undefined]
**TemplateType** | **string** | 用例类型，可选值：STEPS(步骤用例)，TEXT(文本用例) | [default to undefined]
**Title** | **string** | 用例标题 | [default to undefined]

## Example

```typescript
import { ModifyTestCaseRequest } from './api';

const instance: ModifyTestCaseRequest = {
    AttachmentIds,
    CaseId,
    CustomSteps,
    Expected,
    Preconds,
    Priority,
    ProjectName,
    SectionId,
    Steps,
    TemplateType,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
